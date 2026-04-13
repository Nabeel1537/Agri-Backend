import { db } from '../db/database';

export const syncOfflineUsers = async () => {
  try {
    // 🔵 STEP 1: Get unsynced users
    const users = db.getAllSync(`
      SELECT * FROM users WHERE synced = 0;
    `);

    if (users.length === 0) {
      console.log('No users to sync');
      return;
    }

    console.log('Syncing users:', users.length);

    // 🔵 STEP 2: Send each user to server
    for (const user of users) {
      try {
        const res = await fetch('http://172.16.17.130/backend/api/register.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
            phone: user.phone,
          }),
        });

        const data = await res.json();

        console.log('Server response:', data);

        if (data.status === 'success') {
          // 🔵 STEP 3: Mark as synced in SQLite
          db.execSync(`
            UPDATE users 
            SET synced = 1 
            WHERE id = ${user.id};
          `);

          console.log('User synced:', user.email, user.password);
        }

      } catch (err) {
        console.log('Sync error for user:', user.email, err);
      }
    }

    console.log('SYNC COMPLETE');

  } catch (error) {
    console.log('SYNC ERROR:', error);
  }
};