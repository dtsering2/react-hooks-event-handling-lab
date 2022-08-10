// Code EyesOnMe Component Here
export default function EyesOnMe(){
    function focusHandler(){
        console.log("Good!")
    }
    function blurHandler(){
        console.log("Hey! Eyes on me!")
    }
    return(
        <button onFocus = {focusHandler} onBlur = {blurHandler}>Eyes on me</button>
    )
}
