import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
            height = "100vh"
            projectID = "3bde7874-28cd-4569-8a45-e88949984cc0"             // Add Chat Engine Project ID
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;