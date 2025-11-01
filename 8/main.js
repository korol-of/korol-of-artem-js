async function getUsers() {
    try {
     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

     if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
     }

    const users = await response.json();
    console.log(`Список пользователей: `);
      users.forEach(user => {
       console.log(user.name);
      });
      return users;

        } catch (error) {
          console.error(`Операция не удалась: ${error.message}`);
        }
      }

      
      async function getPost(id) {
        try {
          let url = `https://jsonplaceholder.typicode.com/posts`;
          if (id !== undefined) {
            url += `/${id}`;
          }

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
          }

          const post = await response.json();
          return post;

        } catch (error) {
          console.error(`Ошибка: ${error.message}`);
        }
      }
      console.log(getPost(1));
      console.log(getPost(5));