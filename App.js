import React from 'react';
import Sample from './sample';

function Header() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered is-1">Various Cute Cat</h1>
        </div>
      </div>
    </header>
  );
}

function Image(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
        <img src={props.src} alt="cute dog!" />
        </figure>
      </div>
    </div>
  );
}

function Gallery(props) {
  const { urls } = props;
  return (
    <div className="columns is-vcentered is-multiline">
      {urls.map((url) => {
        return (
          <div key={url} className="column is-3">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
}

function Main() {
  <img src="https://yt3.ggpht.com/0F8DmlDmk0GUo3MJeipx5vdZNYEeFN7IqsvGdwNG-ybdpV0BFoUMumMSbUQM98NCeiT6Rdgsg50=s900-c-k-c0x00ffffff-no-rj" alt=""></img>
  const urls = [
    
  ];
  return (
    <main>
      <section className="section">
        <div className="container">
          <Gallery urls={urls} />
        </div>
      </section>
    </main>
  );
}

function Contents(){
  return (
     <div className="has-text-light has-background-black has-text-centered">
       <h1 className="title is-2"> <a href="https://www.youtube.com/channel/UCljUAjufNh7VI0yElcAdlhg"><u className="has-text-light">Atsushi channel cats</u></a></h1>
         <p1>
          Nowadays, there are irresponsible owners in the world where stray kittens are abandoned by their parents or because they cannot be kept.
         What happens to such cats? In conclusion, it will be slaughtered. 
         Meanwhile, Youtuber, which I will introduce from now on, keeps abandoned cats at his own house and gives daily videos with those cats. 
         The YouTuber's name is Atsushi. Atsushi posted a video on YouTube on a channel called Atsushi Channel, and he has nine cats including his parents' cat. 
         Most of them are abandoned cats. I would like to post a brief profile and introductory video about cats on the Atsushi channel.
         </p1>
      </div>
  );
}

function Catprofile(){
  const newLocal = <Sample />;
  return (
    <div>
      <h1 className="title has-text-light has-text-centered py-4 has-background-grey is-3">Atsushi House Cats</h1>
      <h1 className="title is-3">1.Tiger(ティガー)</h1>
      <img src="https://i.ytimg.com/vi/cXWOCfdazf4/maxresdefault.jpg" alt=""></img>
      <table class="has-text-centered table is-bordered is-size-5">
         <caption>profile</caption>
         <thead>
            <tr>
               <th>Question</th>
               <th>Answer</th>
            </tr>
         </thead>
         <tbody>
           <tr>
             <td>Birth</td>
             <td>2015 March 14(now:6)</td>
           </tr>
           <tr>
             <td>Gender</td>
             <td>male</td>
           </tr>
           <tr>
             <td>Weight</td>
             <td>about the latter half of 6kg</td>
           </tr>
           <tr>
             <td>Personality</td>
             <td>Abondoned cat?</td>
           </tr>
           <tr>
             <td>Origin of the name</td>
             <td>Because it is a pheascross pattern and I like Disney</td>
           </tr>
         </tbody>
      </table>
      <h2 className="title is-size 5">What kind of cat?</h2>
      <p>Click this word <button class="button is-small is-black has-text-light"><a href="https://www.youtube.com/watch?v=-F5uffWaqRE"><p className="has-text-light">Tiger</p></a></button> to jump to the introductory video</p>
      <p>      </p>
      <h1 className="title is-3">2.Robin(ロビン)</h1>
      <img src="https://pbs.twimg.com/media/EaCtGTTU8AIQlPq.jpg" alt=""></img>
      <table class="has-text-centered table is-bordered is-size-5">
         <caption>profile</caption>
         <thead>
            <tr>
               <th>Question</th>
               <th>Answer</th>
            </tr>
         </thead>
         <tbody>
           <tr>
             <td>Birth</td>
             <td>2015 April 14(now:6)</td>
           </tr>
           <tr>
             <td>Gender</td>
             <td>male</td>
           </tr>
           <tr>
             <td>Weight</td>
             <td>about 5.9</td>
           </tr>
           <tr>
             <td>Personality</td>
             <td>a dull character(It's easy to get involved in a fight.</td>
           </tr>
           <tr>
             <td>Abondoned cat?</td>
             <td>Yes</td>
           </tr>
           <tr>
             <td>Origin of the name</td>
             <td>Disney character "Robin Hood"</td>
           </tr>
         </tbody>
      </table>
      <h2 className="is-size-5">What kind of cat?</h2>
      <p>Click this word <button class="button is-small is-black has-text-light"><a href="https://www.youtube.com/watch?v=v0DME_b3DMg"><p className="has-text-light">Robin</p></a></button> to jump to the introductory video</p>
      <p>      </p>
      <h1 className="title is-3">3.Nick(ニック)</h1>
      <img src="https://i.ytimg.com/vi/vhMz5uB9Qmg/maxresdefault.jpg" alt=""></img>
      <table class="has-text-centered table is-bordered is-size-5">
         <caption>profile</caption>
         <thead>
            <tr>
               <th>Question</th>
               <th>Answer</th>
            </tr>
         </thead>
         <tbody>
           <tr>
             <td>Birth</td>
             <td>2016 October 14(now:Died by cat AIDS on April 21, 2021)</td>
           </tr>
           <tr>
             <td>Gender</td>
             <td>male</td>
           </tr>
           <tr>
             <td>Weight</td>
             <td>about 4kg</td>
           </tr>
           <tr>
             <td>Personality</td>
             <td>loved being scolded (especially belly)</td>
           </tr>
           <tr>
             <td>Abondoned cat?</td>
             <td>Yes</td>
           </tr>
           <tr>
             <td>Origin of the name</td>
             <td>Disney character "Nick Wilde"</td>
           </tr>
         </tbody>
      </table>
      <h2 className="is-size-5">What kind of cat?</h2>
      <p>Click this word <button class="button is-small is-black has-text-light"><a href="https://www.youtube.com/channel/UCljUAjufNh7VI0yElcAdlhg/videos"><p className="has-text-light">Nick</p></a></button> to jump to the introductory video. Unlike other cats, this cat doesn't have a recent detailed introductory video.</p>
      <p>      </p>
      <h1 className="title is-3">4.Bell(ベル)</h1>
      <img src="https://i.ytimg.com/vi/lRS734pLbIw/maxresdefault.jpg" alt=""></img>
      <table class="has-text-centered table is-bordered is-size-5">
         <caption>profile</caption>
         <thead>
            <tr>
               <th>Question</th>
               <th>Answer</th>
            </tr>
         </thead>
         <tbody>
           <tr>
             <td>Birth</td>
             <td>2021 Mid-April(now 0)</td>
           </tr>
           <tr>
             <td>Gender</td>
             <td>scalpel</td>
           </tr>
           <tr>
             <td>Weight</td>
             <td>about 3.1kg</td>
           </tr>
           <tr>
             <td>Personality</td>
             <td>love playing with toys</td>
           </tr>
           <tr>
             <td>Abondoned cat?</td>
             <td>Yes</td>
           </tr>
           <tr>
             <td>Origin of the name</td>
             <td>Disney character "Bell or "Tinker Bell"</td>
           </tr>
         </tbody>
      </table>
      <h2 className="is-size-5">What kind of cat?</h2>
      <p>Click this word <button class="button is-small is-black has-text-light"><a href="https://www.youtube.com/watch?v=4P5toaChPeg"><p className="has-text-light">Bell</p></a></button> to jump to the introductory video</p>
      <p>      </p>
      <h1 className="title is-3">5.Scar(スカー)</h1>
      <img src="https://i.ytimg.com/vi/lQeJKJqKyZY/maxresdefault.jpg" alt=""></img>
      <table class="has-text-centered table is-bordered is-size-5">
         <caption>profile</caption>
         <thead>
            <tr>
               <th>Question</th>
               <th>Answer</th>
            </tr>
         </thead>
         <tbody>
           <tr>
             <td>Birth</td>
             <td>2015 July 14(now 6)</td>
           </tr>
           <tr>
             <td>Gender</td>
             <td>male</td>
           </tr>
           <tr>
             <td>Weight</td>
             <td>not clear but ideal body shape</td>
           </tr>
           <tr>
             <td>Personality</td>
             <td>General cat temper</td>
           </tr>
           <tr>
             <td>Abondoned cat?</td>
             <td>Yes</td>
           </tr>
           <tr>
             <td>Origin of the name</td>
             <td>Disney character "Scar"</td>
           </tr>
         </tbody>
      </table>
      <h2 className="is-size-5">What kind of cat?</h2>
      <p>Click this word <button class="button is-small is-black has-text-light"><a href="https://www.youtube.com/watch?v=r33r0OVR7Dk"><p className="has-text-light">Scar</p></a></button> to jump to the introductory video</p>
      <p>      </p>
      <h1 className="title is-3">6.Haru(ハル)</h1>
      <img src="https://i.ytimg.com/vi/V_dD7L57b8Q/maxresdefault.jpg" alt=""></img>
      <table class="has-text-centered table is-bordered is-size-5">
         <caption>profile</caption>
         <thead>
            <tr>
               <th>Question</th>
               <th>Answer</th>
            </tr>
         </thead>
         <tbody>
           <tr>
             <td>Birth</td>
             <td>2016 November 7(now 5)</td>
           </tr>
           <tr>
             <td>Gender</td>
             <td>scalpel</td>
           </tr>
           <tr>
             <td>Weight</td>
             <td>not clear but recently overweight</td>
           </tr>
           <tr>
             <td>Personality</td>
             <td>calm but hate hugs</td>
           </tr>
           <tr>
             <td>Abondoned cat?</td>
             <td>No, decided to keep it when it was sent to the foster parent site because it was unsold</td>
           </tr>
           <tr>
             <td>Origin of the name</td>
             <td>not clear</td>
           </tr>
           <tr>
              <td>Cat type</td>
              <td>Munchkin</td>
           </tr>
         </tbody>
      </table>
      <h2 className="is-size-5">What kind of cat?</h2>
      <p>Click this word <button class="button is-small is-black has-text-light"><a href="https://www.youtube.com/watch?v=-F5uffWaqRE"><p className="has-text-light">Haru</p></a></button> to jump to the introductory video</p>
      <p> </p>
      <h1 className="title is-3">7.Daichan(だいちゃん)</h1>
      <img src="https://i.ytimg.com/vi/1m8YgzomPc4/sddefault.jpg" alt=""></img>
      <table class="has-text-centered table is-bordered is-size-5">
         <caption>profile</caption>
         <thead>
            <tr>
               <th>Question</th>
               <th>Answer</th>
            </tr>
         </thead>
         <tbody>
           <tr>
             <td>Birth</td>
             <td>not clear but 11years(now:Died by Malignant lymphoma cancer  on September 2, 2021)</td>
           </tr>
           <tr>
             <td>Gender</td>
             <td>male</td>
           </tr>
           <tr>
             <td>Weight</td>
             <td>not clear</td>
           </tr>
           <tr>
             <td>Personality</td>
             <td>like people but hate cats</td>
           </tr>
           <tr>
             <td>Abondoned cat?</td>
             <td>No</td>
           </tr>
           <tr>
             <td>Origin of the name</td>
             <td>not clear</td>
           </tr>
           <tr>
              <td>Cat type</td>
              <td>Abyssinian</td>
           </tr>
         </tbody>
      </table>
      <h2 className="is-size-5">What kind of cat?</h2>
      <p>Click this word <button class="button is-small is-black has-text-light"><a href="https://www.youtube.com/watch?v=1m8YgzomPc4"><p className="has-text-light">Daichan</p></a></button> to jump to the introductory video</p>
      <p>      </p>
      <h1 className="title is-3">8.Shouchan(ショウちゃん)</h1>
      <img src="https://pbs.twimg.com/media/CoL_f4uUEAI1B8T.jpg:small" alt=""></img>
      <table class="has-text-centered table is-bordered is-size-5">
         <caption>profile</caption>
         <thead>
            <tr>
               <th>Question</th>
               <th>Answer</th>
            </tr>
         </thead>
         <tbody>
           <tr>
             <td>Birth</td>
             <td>not clear but 11years</td>
           </tr>
           <tr>
             <td>Gender</td>
             <td>male</td>
           </tr>
           <tr>
             <td>Weight</td>
             <td>not clear</td>
           </tr>
           <tr>
             <td>Personality</td>
             <td>not shyness</td>
           </tr>
           <tr>
             <td>Abondoned cat?</td>
             <td>No</td>
           </tr>
           <tr>
             <td>Origin of the name</td>
             <td>not clear</td>
           </tr>
           <tr>
              <td>Cat type</td>
              <td>Abyssinian</td>
           </tr>
         </tbody>
      </table>
      <h2 className="is-size-5">What kind of cat?</h2>
      <p>Click this word <button class="button is-small is-black has-text-light"><a href="https://www.youtube.com/watch?v=bTuk4Wk3Jyc"><p className="has-text-light">Shouchan</p></a></button> to jump to the introductory video</p>
      <p>      </p>
      <h1 className="title is-3">9.Aron(アロン)</h1>
      <img src="https://i.ytimg.com/vi/Esh5ddTVdWw/maxresdefault.jpg" alt=""></img>
      <table class="has-text-centered table is-bordered is-size-5">
         <caption>profile</caption>
         <thead>
            <tr>
               <th>Question</th>
               <th>Answer</th>
            </tr>
         </thead>
         <tbody>
           <tr>
             <td>Birth</td>
             <td>not clear</td>
           </tr>
           <tr>
             <td>Gender</td>
             <td>male</td>
           </tr>
           <tr>
             <td>Weight</td>
             <td>not clear</td>
           </tr>
           <tr>
             <td>Personality</td>
             <td>a sweetheart for my family, but wary of Atsushi</td>
           </tr>
           <tr>
             <td>Abondoned cat?</td>
             <td>No, decided to keep it when it was sent to the foster parent site because it was unsold</td>
           </tr>
           <tr>
             <td>Origin of the name</td>
             <td>not clear</td>
           </tr>
           <tr>
              <td>Cat type</td>
              <td>Scottish</td>
           </tr>
         </tbody>
      </table>
      <h2 className="is-size-5">What kind of cat?</h2>
      <p>Click this word <button class="button is-small is-black has-text-light"><a href="https://www.youtube.com/watch?v=goGNWrgz6eU"><p className="has-text-light">Aron</p></a></button> to jump to the introductory video</p>
      <p>  </p>
    </div>
  );
}

function Last(){
  return (
    <div className="content has-text-light has-background-black has-text-centered">
      <h1 class="has-text-light">Last Message</h1>
      <p>These cats happened to be picked up by Atsushi, but if they hadn't been picked up, they would have been slaughtered if they hadn't been picked up.
      It's painful for me to think that this is the reality.
      As a first step solution to prevent this from happening, I recommend watching and sharing videos and images of various cute cats.
      This is because spreading the cuteness of cats will increase their interest in cats and at the same time give them an opportunity to know that this is happening. 
      If you are interested, please access the API in the hooter part. 
      I hope that the slaughter of cats will be reduced as much as possible. 
      </p>

    </div>
  );
}


function Footer() {
  return (
    <footer className="footer">
         <div className="content has-text-centered ">
           <p>Cat images are retrieved from random cat</p>
           <p>
             <a href="https://aws.random.cat/view/1614"><button class="button is-small is-black">Click random cat</button></a>
           </p>
           <p></p>
           <p class="has-text-centered">日本大学文理学部情報科学科 Webプログラミングの演習課題</p>
           <p class="has-text-centered">学籍番号:5420017　氏名:齊藤孝樹</p>
         </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Contents />
      <Catprofile />
      <Last />
      <Footer />
    </div>
  );
}

export default App;