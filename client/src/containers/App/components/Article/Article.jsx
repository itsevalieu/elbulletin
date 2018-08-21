import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
  render() {
    return (
      <div id='article' className='article'>
        <div id='details' className='article-details'>
          <h1 id='title'>The Monk</h1>
          <p id='author'>Eva Lieu</p>
          <p id='year'>2015</p>
          <p id='summary'>Short story about a father telling a story to his child about his days as a refugee living on an island.</p>
        </div>
        <div id='body' className='article-body'>
          <p>My father drives me home at night on the 10 Freeway from UCLA. Just like always, when it’s only him, me, and the quiet road, he paints a picture for me about memories that seem to be from another life. And just like always, I prop my feet up on the dashboard and lean my car seat back so I can see the freeway lights race by overhead like ghostly imprints against the dark sky. Somehow, looking at the pitch-black sky always made it easier for me to listen to my father’s stories from his low rumble of a voice. Like all his stories, he starts right in the middle and says:</p>
          <p>“When I reached that shore, I thought it was my sanctuary. Six days on a rotting boat will do that to you. You start thinking you’ll never reach land with that inky water all around you, 360, and you think the ocean will be your grave. A friend of mine left on a boat earlier than me. After a typhoon, they pulled his boat from the sea and his body came with it. But storms and hunger weren’t the only things that killed you at sea. You’d never believe it, but your aunt’s best friend was captured by pirates. Yes, pirates; not like the ones in the movies with Johnny Depp, actual pirates who kidnapped women and raped them. Your aunt never saw or heard from her best friend again.</p>
          <p>“I was lucky to even set foot on that island, even if it was a refugee camp in the Philippine islands. Too soon, I realized the problems I had to face with taking care of my own survival. Place yourself in my shoes. I was seventeen, grew up going to school and listening to the radio. I liked to hang out with the boys in my neighborhood and we used to see who could pee the farthest. Then the communist came and we had to get out of there or die. Drifting off to sea gave me- gave us boat people- a better chance at living than staying in Vietnam. You don’t picture that when you hear the word Vietnam here in America. You picture war. You forget Vietnam was a home for some people.</p>
          <p>“Anyways, the island was overcrowded and dirty. There weren’t houses built there for us, we built them ourselves with sheet metal and parts from our boats. It was hard work. We caught our own food in the ocean. The island became our prison and our livelihoods. </p>
          <p>“When darkness fell, we huddled around the campfires someone would kindle with damp wood. We lit the fires for light, not heat. The island was always warm and humid. In our free time, we played cards and gossiped. It was the same thing every night. And every night, we would get tired of cards and gossip and then we would tell stories, like I am to you right now.”</p>
          <p>My father laughs. His reminiscing leads down another path and he recalls a specific detail from his time in the camp. From the countless stories he could barely remember that were told around the campfire each night, he tells me the one that stood out to him the most. He chuckles as I urge him to continue. </p>
          <p>“There was this crazy old man at the refugee camp. He was always in trouble because he always peeked at girls peeing or changing behind the palm trees. Nobody liked him, even his old mother hated him. But when he told his stories, we would always sit closer to hear them. </p>
          <p>“One night, he tells us: ‘Long ago, there lived a little boy who wanted to become a monk, but his parents wanted him to be an accountant. He hated math, so he ran away from home. He walked miles and miles away from his village to the base of a tall, foggy mountain. There, at the base of the mountain, were stairs cut from stone which led to the very top. He climbed the stone stairs for a long time. It took him hours. It took him days. He ate bugs and grass that he found on the way. When he finally reached the top, he found a gigantic gold temple full of little boys with shaved heads and orange robes. The boy crawled to the entrance of the temple where a bald old man came out. The boy told the old man he wanted to become a monk, and the old man told him, “If you want to be a monk, then you have to be patient and listen to my story.” </p>
          <p>“‘So the boy sat down and the old monk began his tale, “Long, long ago, there lived a little boy who wanted to become a monk, but his parents wanted him to be an accountant. He hated math, so he ran away from home. He walked miles and miles away from his village to the base of a tall, foggy mountain. There, at the base of the mountain, were stairs cut from stone which led to the very top. He climbed the stone stairs for a long time. It took him hours. It took him days. He ate bugs and grass that he found on the way. When he finally reached the top, he found a gigantic gold temple full of little boys with shaved heads and orange robes. The boy crawled to the entrance of the temple where a bald old man came out. The boy told the old man he wanted to become a monk, and the old man told him, ‘If you want to be a monk, then you have to be patient and listen to my story.’</p>
          <p>“‘“So the boy sat down and the old monk began his tale, ‘Long, long, long ago, there lived a little boy who wanted to become a monk.’”’”</p>
          <p>	And at this point in my father’s stories, I had already fallen asleep. By the time I woke up, we were already home.</p>
        </div>
      </div>
    );
  }
}

export default Article;
