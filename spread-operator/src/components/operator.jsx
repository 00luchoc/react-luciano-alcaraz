export function Operator(){
    const [nums, setNums] = useState([1,2,3,4,5])
    
    const addNums = () => {
        setNums([...nums, 6]);

    }

    return(
        <>
            {nums.map((nums, index) => (
                <p key={index}>{num}</p>
            ))}
            <h3>Spread Operator</h3>
            <button onClick={addNums}>Click me!</button>
        </>
    );
}