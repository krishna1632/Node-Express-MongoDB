export function login() {
  return `
    <h1>Login Page</h1>
    <form action="/submit" method="post">
        <input type="text" name="name" placeholder="Enter Name"/><br/><br/>
        <input type="password" name="password" placeholder="Enter Password"/><br/><br/>
        <button type="submit">Submit</button>
    </form>
    <a href="/">Go to home page</a>
  `;
}
