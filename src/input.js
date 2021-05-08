export function Input({label, type, value, onChange, key}) {
    return (
        <div> 
           <label>
                <h3 className="label">{label}</h3>
                <input type={type} value={value} onChange={(e) => onChange(e.target.value)} key={key}/>
            </label> 
        </div>       
    );
}