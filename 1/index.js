
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

function MainContent(){
    return(
        <h1>This is where the main information will go!</h1>
    )
}
root.render(
    <MainContent />
);
