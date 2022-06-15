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
console.log(pokemons[pokemons.length - 1]);

// 連想配列
