<script>
    import { csplogo, cubismlogo, obslogo, videoediting, webdev, aftereffects } from '../../assets';
    import "./goals.css";
</script>

<div>
    <div class=' pt-5'/>
    <h1 class=' w-fit mx-10 GoalsCard rounded-xl'>There is a few things I want to learn:</h1>

    <div class=' grid grid-cols-5 min-h-screen my-5 mx-10'>
        <div class=' GoalsCard GoalsCardRight flex justify-between'>
            <img src={webdev} alt="web development" class='goallogo' />
            <div class=' px-5'>
                <h2>New stuff for website development (obviously)</h2>
                <p>
                    My skillset is currently very much on front-end, so I have hopes to learn some level of back-end as well. I am also looking into learning some more funky front-end libraries like three.js.
                </p>
            </div>
        </div>

        <div class=' GoalsCard GoalsCardLeft flex justify-between'>
            <div class=' px-5'>
                <h2>Illustrations & drawing</h2>
                <p>
                    I've always had interest in drawing and illustrations in anime style. My hopes are to find time to start learning drawing proper and use it in the other following goals aswell.
                    I already own a Wacom Cintiq 16" drawing screen and software license for Clip Studio Paint, and occasionally do some small drawing with them.
                </p>
            </div>
            <img src={csplogo} alt="Clip Studio Paint" class='goallogo' />
        </div>

        <div class=' GoalsCard GoalsCardRight flex justify-between'>
            <img src={aftereffects} alt="After Effects Logo" class='goallogo' />
            <div class=' px-5'>
                <h2>Adobe After Effects</h2>
                <p>
                    I've recently taken interest in AEE. I follow a couple of stream overlay artists, and have gotten an itch to try creating something like them myself.
                    However, having been busy, the price of the software and short trial have kept me waiting for a more fitting timeframe to test out the software.
                </p>
            </div>
        </div>

        <div class=' GoalsCard GoalsCardLeft flex justify-between'>
            <div class=' px-5'>
                <h2>Live2D</h2>
                <p>
                    Bringing illustrations to life. Live2D is a form of media where image is split into parts and the parts are animated, individually and as a whole. Resulting product can be used in example in games and animations, or turned into gifs.
                    Software I've been looking to use is called Live2D Cubism.
                </p>
            </div>
            <img src={cubismlogo} alt="Cubism logo" class='goallogo' />
        </div>

        <div class=' GoalsCard GoalsCardRight flex justify-between'>
            <img src={videoediting} alt="Video Editing" class='goallogo' />
            <div class=' px-5'>
                <h2>Video editing</h2>
                <p>
                    I've dabbled in video editing for game footage for years, wether for single clips or longer compilations. Sometimes I've added a little more editing into them, sometimes they are just compilations of clips.
                    Majority of my videos are hidden, only shared for my friends, but I also have some videos that can be found <a href='https://www.youtube.com/channel/UCZXXGWYSfa5USVnCWDjWDyw' target='_blank'> at my youtube</a>.
                </p>
            </div>
        </div>

        <div class=' GoalsCard GoalsCardLeft flex justify-between'>
            <div class=' px-5'>
                <h2>Streaming</h2>
                <p>
                    Streaming as career has been a long time dream. Ideally incorporating the earlier mentioned goals as well as gaming for content.
                </p>
            </div>
            <img src={obslogo} alt="OBS logo" class='goallogo ' />
        </div>
    </div>
</div>