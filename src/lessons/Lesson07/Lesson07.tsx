import MyButton from "../../components/myButton/MyButton";

export default function Lesson07() {
  //! типизация обьектов
  // возможна с помощью двух ключевых слов interface и type

  //! типизация через interface

  // описание типа с помощью interface - он описывает все типы данных по ключамв обьекте
  // такой тип записанный отдельно удобно переиспользовать с разными обьектами
  interface ISuperHero {
    id: number;
    name: string;
    nickname: string;
    superpowers: string[];
    // необезтельный ключ в обьекте (пишется только в интерфейсе)
    age?: number;
  }
  // здес мы создаем переменную hero1 с типом ISuperHero, описанным выше
  const hero1: ISuperHero = {
    id: 1,
    name: "Bruce Wayne",
    nickname: "Batman",
    superpowers: [],
  };
  //  на основании уже существующих interface можно создавать новые через ключевое слово extends(расширение)
  interface ISpaceHero extends ISuperHero {
    homePlanet: "Mars" | "Saturn" | "Crypton";
  }

  const hero2: ISpaceHero = {
    id: 2,
    name: "Clark Kent",
    nickname: "Superman",
    superpowers: ["super fly", "super fly"],
    homePlanet: "Crypton",
  };
  // ? помните что типы можно обьявить заново и тогда свойство описанные в них будут складываться

  // interface ISpaceHero {
  //   galactic: string
  // }

  // ! пример типизации массива из обьектов
  // пишите название интерфейса для обьекта из которого состоит массив и кважратные скобки
  // это значит, что если нужно типизировать массив обьектов - сначала типизируйте  один обьект из которого состоит этот массив

  const supperArray: ISuperHero[] = [
    hero1,
    hero2,
    {
      id: 3,
      name: "Tony Stark",
      nickname: "Iron man",
      superpowers: ["super genius"],
    },
  ];

  console.log("супергерои: ", supperArray);

  //   ! типизачция через type
  //  есть небольшие ососбенности в сравнении с interface
  //  оба способа хороши и активно используються
  type User = {
    id: 1;
    isAdmin: boolean;
    name: "Nick Fury";
  };

  type UserProfile = User & {
    info: string;
  };
  const user1: UserProfile = {
    id: 1,
    isAdmin: true,
    name: "Nick Fury",
    info: "Head of the Shield organization",
  };

  console.log(user1);

//   ! дженерики 
// можно смотреть на них как на "переменная" для  передаваемого типа при вызову функции
function makeArray<T>(first:T, second:T):T[] {
    return [first, second]

}
console.log(makeArray(100,1000));
console.log(makeArray(true,false));

  return (
    <div>
      <h1>Lesson 07: TypeScript pt2 💁‍♂️</h1>
      <p>
        Самое интересное на этом уроке происходит в теле функции и в командной
        строке
      </p>
      <MyButton text="Learn TypeScipt now!"/>
    </div>
  );
}
