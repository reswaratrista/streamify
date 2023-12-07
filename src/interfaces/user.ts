interface User {
    username: string;
    name: string;
    email: string;
    password: string;
    internal_token: string | null;
    fetch_token: string | null;
  }