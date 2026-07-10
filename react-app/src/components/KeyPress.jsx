import useKeyPress from "../hooks/useKeyPress";

export default function KeyPress(){
    useKeyPress('a', 
        (e) => {
            e.preventDefault();
            console.log('The "a" key was pressed');
        });
    
      return null;
}