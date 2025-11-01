async function createPost(postData) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
  });

   if (!response.ok) {
   throw new Error(`Ошибка сервера: ${response.status}`);
   }
    const newPost = await response.json();
    console.log(`Пост создан: ${newPost}`);
      return newPost;
    } catch (error) {
    console.error(`Ошибка при создании поста: ${error.message}`);
    throw error;
   }
}
async function testCreateFunctions() {
  console.log(`Начало теста`);
    try {
   const user = await createUser({
        name: 'Console Tester',
        email: 'console@test.com',
        phone: '88005553535'
  });
      console.log(`Пользователь создан: ${user}`);
    } catch (error) {
      console.log(`Ошибка создания пользователя: ${error.message}`);
    }

    try {
      const post = await createPost({
        title: 'Новый пост',
        body: 'Это тело нового поста',
        userId: 2
      });
      console.log(`Пост создан: ${post}`);
    } catch (error) {
      console.log(`Ошибка создания поста: ${error.message}`);
    }

    console.log('Тест завершен');
  }


  testCreateFunctions();