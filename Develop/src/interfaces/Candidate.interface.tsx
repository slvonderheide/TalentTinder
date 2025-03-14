// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    id?: string;
    name: string;
    username: string;
    location?: string;
    avatar: string;
    email: string;
    html_url: string;
    company?: string;
  }
  const Candidate: Candidate = {
    name: 'John Doe',
    username: 'johndoe',
    location: 'San Francisco, CA',
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
    email: 'https://jdoe@example.com',
    html_url: 'jdoe.com',
    company: 'Acme Corporation',
  };
  

export default Candidate;