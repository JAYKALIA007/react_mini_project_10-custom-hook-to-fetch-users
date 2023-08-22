import { usePeople } from "./usePeople";
const Body = () => {
  const [people, fetchUsers] = usePeople();
  return (
    <>
      <p>Users list</p>
      {people.length > 0 && (
        <div>
          <button
            onClick={() => {
              fetchUsers(1);
            }}
          >
            Fetch More
          </button>
          <ul>
            {people.map((person) => (
              <li key={person?.name?.first}>{person?.name?.first}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Body;
