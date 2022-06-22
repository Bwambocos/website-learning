// js ファイル
/*
let userName = prompt("名前を入力して下さい．")
alert("こんにちは，" + userName + " さん！")
let fav = prompt("好きなポケモンを入力して下さい．")
alert(userName + " さんは " + fav + " が好きなんですね！")
*/

// 簡単な計算
let a = 2, b = 3, c = 4;
console.log(a + b);
console.log(b - c);
console.log(a * b);
console.log(c / a);
console.log(a ** b);
console.log(c % a);

// コンソール
console.log("Hello! I'm Javascript!");
console.log(4 / (0.3 ** 2));

// 変数
var weight = 4, height = 0.3;
console.log(weight);
console.log(height);
var BMI = weight / (height ** 2);
console.log(BMI);
/*
weight = prompt("Input your weight (in m)");
height = prompt("Input your height (in kg)");
alert("Your BMI is " + weight / (height ** 2));
*/

// 配列
let pokemons = ["メタモン", "ピカチュウ", "イーブイ", "ピィ", "シビルドン", "ヒトモシ", "エルフーン", "プラスル", "マイナン", "ルカリオ", "チェリム", "カビゴン", "レジアイス", "ベロベルト", "ハブネーク", "マリルリ", "ブラッキー"];
console.log(pokemons);

let pokemon_6th = pokemons[5];
console.log(pokemon_6th);

let pokemon_get = pokemons.length;
console.log(pokemon_get);

for (let index = 0; index < pokemons.length; ++index)
{
    var suffix;
    switch (index)
    {
        case 0:
            suffix = "st";
            break;
        case 1:
            suffix = "nd";
            break;
        case 2:
            suffix = "rd";
            break;
        default:
            suffix = "th";
            break;
    }
    console.log((index + 1) + suffix + " pokemon is " + pokemons[index]);
}
console.log("The last pokemon is " + pokemons[pokemons.length - 1]);

// 連想配列
let pokemonDetails =
[
{
    "name" : "メタモン",
    "type" : "ノーマル",
    "height" : "0.3m",
    "weight" : "4.0kg"
},
{
  "name": "マイナン",
  "type": "でんき",
  "height": "0.4m",
  "weight": "4.2kg",
},
{
  "name": "イーブイ",
  "type": "ノーマル",
  "height": "0.3m",
  "weight": "6.5kg",
}
]
console.log(pokemonDetails);

for (var i = 0; i < pokemonDetails.length; ++i)
{
    var name = pokemonDetails[i].name;
    var type = pokemonDetails[i].type;
}

// if 文
// var pokemonName = prompt("pokemon name?")
// var ball = prompt("ball name?")
// console.log("あ！やせいの" + pokemonName + "がとびだしてきた！");
// console.log(ball + "をなげた！");
// if (ball === "マスターボール")
// {
//   console.log("やったー！" + pokemonName + "をゲットしたぞ！");
// }
// else
// {
//   console.log("だめだ！ポケモンがボールからでてしまった！");
// }

// console.log("あ！やせいのメタモンがとびだしてきた！");
// var ball = prompt("ball name?")
// console.log(ball + "をなげた！");
// if (ball === "マスターボール" || ball === "ハイパーボール") {
//   console.log("やったー！メタモンをゲットしたぞ！");
// } else if (ball === "スーパーボール") {
//   console.log("ざんねん！もうすこしでつかまえられたのに！");
// } else {
//   console.log("だめだ！ポケモンがボールからでてしまった！");
// }

let num = 2;
console.log(num % 2 ? "odd" : 100);

// for 文
for(let i=0;i<10;i++){
    console.log("天神")
    console.log("hoge")
}

let x = 3, y = 3;
console.log(x++);
console.log(x);
console.log(++y);
console.log(y);

let Pokemons = [
    "メタモン",
    "ピカチュウ",
    "イーブイ",
    "ピィ",
    "シビルドン",
    "ヒトモシ",
    "エルフーン",
    "プラスル",
    "マイナン",
    "ルカリオ",
    "チェリム",
    "カビゴン",
    "レジアイス",
    "ベロベルト",
    "ハブネーク",
    "マリルリ",
    "ブラッキー",
];
for (let i = 0; i < Pokemons.length; i++) {
    console.log(Pokemons[i]);
}

// 関数
let array = [];
console.log(array.length);
console.log(array.length - 1);

function getPokemon(nameOfPokemon)
{
    console.log("あ！やせいの" + nameOfPokemon + "がとびだしてきた！");
    console.log("モンスターボールをなげた！");
    console.log("やったー！" + nameOfPokemon + "をゲットしたぞ！");
}

getPokemon("hoge");
getPokemon("fuga");
getPokemon("piyo");
getPokemon("ピカチュウ");
getPokemon("ポッチャマ");
getPokemon("レジアイス");

function getDaze(nameOfPokemon)
{
    return "Got " + nameOfPokemon;
}

console.log(getDaze("hoge"));

// Practice
let metamon = { name: "メタモン", type: "ノーマル" };
console.log(metamon["name"] + "のタイプは" + metamon["type"] + "です");

let allPokemons = [
    { name: "メタモン", type: "ノーマル" },
    { name: "ピカチュウ", type: "でんき" },
    { name: "イーブイ", type: "ノーマル" },
    { name: "プラスル", type: "でんき" },
    { name: "マイナン", type: "でんき" },
    { name: "レジアイス", type: "こおり" },
    { name: "ヌケニン", type: "むし" },
    { name: "パチリス", type: "でんき" },
    { name: "ゴース", type: "ゴースと" },
    { name: "トゲデマル", type: "でんき" },
];
for (var i = 0; i < allPokemons.length; ++i)
{
    console.log(allPokemons[i].name + "のタイプは" + allPokemons[i].type + "です");
}

console.log("でんきタイプのポケモン：")
for (var i = 0; i < allPokemons.length; ++i)
{
    if (allPokemons[i].type == "でんき")
    {
        console.log(allPokemons[i].name + "のタイプは" + allPokemons[i].type + "です");
    }
}
