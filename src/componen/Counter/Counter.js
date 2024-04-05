import React from "react";

const Counter = () => {
    const [nimber, setNumber] = useState(0);

    const handleTambah = () => {
        setNumber(number + 1);
    };

    const handleKurang = () => {
        setNumber(number - 1);
    };

    return (
        <div>
            <p>Nilai saat ini : (number)</p>
            <button onClick={handleTambah}>Tambah</button>
            <button onClick={handleKurang}>Kurang</button>
        </div>
    )
}