export interface User {
  name: string;
  company: string;
  login: string;
}

export interface ProfileState {
  user?: User;
}
