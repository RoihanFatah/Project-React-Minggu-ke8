import React, {useState, useEffect} from 'react';

let count = 0;

const Menu = () => {

    const [test, setTest] = useState(0);

    function coba() {
        console.log('COBA');

        setTest(count++);
    }

    useEffect(() => {
        console.log(test);
    }, [test]);

    return (
        <div>
            <h1>Menu Content</h1>
            <button onClick={coba}>Click</button>
        </div>
    );
}

export default Menu;
