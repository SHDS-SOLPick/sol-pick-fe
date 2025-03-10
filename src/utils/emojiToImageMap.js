// 식재료 이미지 import
import apple from "../assets/ing/ing_redapple.svg";
import pear from "../assets/ing/ing_pear.svg";
import orange from "../assets/ing/ing_orange.svg";
import lemon from "../assets/ing/ing_lemon.svg";
import strawberry from "../assets/ing/ing_strawberry.svg";
import watermelon from "../assets/ing/ing_watermelon.svg";
import grape from "../assets/ing/ing_grape.svg";
import tomato from "../assets/ing/ing_tomato.svg";
import broccoli from "../assets/ing/ing_broccoli.svg";
import leaf from "../assets/ing/ing_leaf.svg";
import cherry from "../assets/ing/ing_cherry.svg";
import peach from "../assets/ing/ing_peach.svg";
import melon from "../assets/ing/ing_melon.svg";
import meat from "../assets/ing/ing_meat.svg";
import croissant from "../assets/ing/ing_croissant.svg";
import bread from "../assets/ing/ing_bread.svg";
import banana from "../assets/ing/ing_banana.svg";
import pineapple from "../assets/ing/ing_pineapple.svg";
import kiwi from "../assets/ing/ing_kiwi.svg";
import mango from "../assets/ing/ing_mango.svg";
import coconut from "../assets/ing/ing_coconut.svg";
import cucumber from "../assets/ing/ing_cucumber.svg";
import pepper from "../assets/ing/ing_pepper.svg";
import carrot from "../assets/ing/ing_carrot.svg";
import potato from "../assets/ing/ing_potato.svg";
import corn from "../assets/ing/ing_corn.svg";
import salad from "../assets/ing/ing_salad.svg";
import peanut from "../assets/ing/ing_peanut.svg";
import onion from "../assets/ing/ing_onion.svg";
import garlic from "../assets/ing/ing_garlic.svg";
import burrito from "../assets/ing/ing_burrito.svg";
import leg from "../assets/ing/ing_leg.svg";
import steak from "../assets/ing/ing_steak.svg";
import fish from "../assets/ing/ing_fish.svg";
import tropicalfish from "../assets/ing/ing_tropicalfish.svg";
import shrimp from "../assets/ing/ing_shrimp.svg";
import crab from "../assets/ing/ing_crab.svg";
import lobster from "../assets/ing/ing_lobster.svg";
import squid from "../assets/ing/ing_squid.svg";
import octopus from "../assets/ing/ing_octopus.svg";
import friedshrimp from "../assets/ing/ing_friedshrimp.svg";
import milkglass from "../assets/ing/ing_milkglass.svg";
import cheese from "../assets/ing/ing_cheese.svg";
import butter from "../assets/ing/ing_butter.svg";
import egg from "../assets/ing/ing_egg.svg";

// 이모지와 이미지 매핑 객체
export const EMOJI_TO_IMAGE_MAP = {
  // 과일류
  "🍎": apple,
  "🍐": pear,
  "🍊": orange,
  "🍋": lemon,
  "🍌": banana,
  "🍉": watermelon,
  "🍇": grape,
  "🍓": strawberry,
  "🍈": melon,
  "🍍": pineapple,
  "🥝": kiwi,
  "🥭": mango,
  "🍒": cherry,
  "🍑": peach,
  "🍅": tomato,
  "🥥": coconut,

  // 채소류
  "🥦": broccoli,
  "🥬": leaf,
  "🥒": cucumber,
  "🌶️": pepper,
  "🥕": carrot,
  "🥔": potato,
  "🌽": corn,
  "🥗": salad,
  "🥜": peanut,
  "🧅": onion,
  "🧄": garlic,
  "🥙": burrito,

  // 육류 및 해산물
  "🍗": leg,
  "🍖": meat,
  "🥩": steak,
  "🐟": fish,
  "🐠": tropicalfish,
  "🦐": shrimp,
  "🦀": crab,
  "🦞": lobster,
  "🦑": squid,
  "🐙": octopus,
  "🍤": friedshrimp,

  // 유제품
  "🥛": milkglass,
  "🧀": cheese,
  "🧈": butter,
  "🥚": egg,
};

// 이모지로부터 이미지 경로를 가져오는 함수
export const getIngredientImageFromEmoji = (emoji) => {
  return EMOJI_TO_IMAGE_MAP[emoji] || null;
};
