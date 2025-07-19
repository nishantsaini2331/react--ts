interface ChildComponentProps {
  name: string;
  age: string;
  email?: string;
}

function ChildComponent({ name, age }: ChildComponentProps) {
  return (
    <div>
      {name} - {age}
    </div>
  );
}

export default ChildComponent;
