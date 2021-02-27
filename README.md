
![toy](https://user-images.githubusercontent.com/75570915/109385249-dcd36080-7935-11eb-944c-696064885efe.jpg)

# 🧸 Algorithm_Study

🌟 코드스테이츠 Toy 알고리즘 스터디입니다!🌟<br/>
🌟 알고리즘뿐만 아니라 코스 과정에서 필요한 자료를 서로 공유합니다! 🌟

<br/>
<br/>

## 👉 Rules

1. **모든** 그룹원들이 발표를 합니다. 

```js
    const Algolithm_study = () => {
    let Presenters = ["우성님", "은욱님", "주현님", "영호님", "순기님", "유원님"];
    return Presenters.map(el => `Today's Presenter : ${el}`)
}
```

<br/>
<br/>


2. 자신이 작성한 코드가 아니라 **다른 사람이 작성한 코드**를 발표하고 여러 방면에서 코드를 분석하는 실력을 키웁니다.

```js
const random_Pr = function (arr) {
    let presenters = arr.slice();

    for (let i = 0; i < arr.length; i++) {
      const whoAreYou = Math.floor(Math.random() * arr.length);
      let me = presenters[i];

      presenters[i] = presenters[whoAreYou];
      presenters[whoAreYou] = me;
    }

    return presenters;
  };
  
  const presenters = ["우성님", "은욱님", "주현님", "영호님", "순기님", "유원님"];
  const result = random_Pr(presenters)

  const study_Start = [
  `우성님 코드=> ${result[0]} 당첨!` ,
  `은욱님 코드=> ${result[1]} 당첨!` ,
  `주현님 코드=> ${result[2]} 당첨!` ,
  `영호님 코드=> ${result[3]} 당첨!` ,
  `순기님 코드=> ${result[4]} 당첨!` ,
  `유원님 코드=> ${result[5]} 당첨!`
  ]
  console.log(study_Start)
```  

<br/>
<br/>

3. 스터디 그룹이 끝난 후에는 **배운점, 느낀점**을 기록합니다!

```js
class Review {
    constructor(name, date, content) {
        this.name = name
        this.date = date
        this.content = content
    }
}

const today_i_learned = new Review ("이름을 적어주세요", "날짜를 적어주세요", "내용을 입력해주세요")
```
