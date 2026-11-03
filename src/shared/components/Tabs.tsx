interface TabsProps<T extends string> {
    options: readonly T[];
    value: T;
    onChange: (value: T) => void;
}

export function Tabs<T extends string>({options, value, onChange}: TabsProps<T>) {
    return (
        <div className="tabs">
            {options.map(option => (
                <button key={option} className={option === value ? 'active' : ''} onClick={() => onChange(option)}>{option}</button>
            ))}
        </div>
    );
}
