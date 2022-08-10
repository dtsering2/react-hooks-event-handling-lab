// Code Keypad Component Here
function someHandler (e){
    e.preventDefault()
    console.log(`Entering password...`)
}
function Keypad (){
    return (
        <div>
            <form>
                <input type = "password" onChange = {someHandler} ></input>
            </form>
        </div>
    )
}

export default Keypad;