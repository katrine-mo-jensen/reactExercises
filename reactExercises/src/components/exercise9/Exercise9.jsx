import { useEffect, useState } from "react";
import { Wrapper } from "../wrapper/Wrapper";
import { Card } from "./Card";

export function Exercise9() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUsers = () => {
      const url = "https://random-data-api.com/api/users/random_user?size=5";
      fetch(url)
        .then((result) => result.json())
        .then((data) => setUserData(data));
    };
    fetchUsers();
  }, []);

  // console.log('userdata', userData)

  return (
    <Wrapper title="Exercise 9">
      <section>
        {userData &&
          userData.map((item) => {
            return (
              <Card
                key={item.uid}
                src={item.avatar}
                name={item.first_name + " " + item.last_name}
                title={item.employment.title}
                keySkill={item.employment.key_skill}
              />
            );
          })}
      </section>
    </Wrapper>
  );
}
