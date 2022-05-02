# amplify-auth-login
AWS authentication login in React JS

🐱‍👓 I made an AWS account, and navigated to the AWS Management Console

🐱‍👓 Installed the amplify libraries and react components:
 
  * import Amplify from 'aws-amplify'
  * import config from './aws-exports'
  * Amplify.configure(config)

🐱‍👓 The above contains all the information about where the authentication is located in AWS

🐱‍👓 Made the higher order component: AWS import { withAuthenticator } from '@aws-amplify/ui-react', so that you need to log in to view the App component
