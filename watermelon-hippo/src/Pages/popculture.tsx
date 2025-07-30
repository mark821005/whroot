import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Featurecontent from "../Components/Featurecontent";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <Hero titleone="Popular" titletwo="Culture" image="doug_wallow.webp" />
      <Featurecontent
        subtitle={"More Education than Sense"}
        title={"In Popular Culture"}
        excerpt={
          "An excerpt from the much-celebrated work of fictional fiction by Mark Twain. Published in the year that never happened, this piece of literature won numerous made up awards and remains a family favourite for literally nobody around the world."
        }
        image={"twh_mark_twain.png"}
        content={
          <>
            <p className="my-8">
              "Now, it is one thing to see a creature with your own eyes, and
              quite another to hear the stories that the locals spin about it. A
              man's eyes can be fooled by the heat-shimmer on the river or an
              unfortunate bout of malaria, but a man's ears can be led down a
              garden path so overgrown with nonsense that he may never find his
              way back to reason.
            </p>
            <p className="my-8">
              The natives of that region, you see, held the Watermelon Hippo in
              a kind of lazy reverence. They didn't worship it, for it is hard
              to worship a creature that spends most of its day looking like a
              half-submerged melon with indigestion. But they respected it, and
              more than that, they told stories about it that would make a
              Mississippi riverboat gambler blush.
            </p>
            <p className="my-8">
              One evening, over a fire that smelled suspiciously of damp socks,
              our guide—the one who called himself Stanley—told us a tale he'd
              heard. He claimed that the hippo didn't eat river grass and water
              hyacinths like its drab-colored kin. No, this particular beast, he
              said with a perfectly straight face, subsisted on a diet of pure
              sunlight and river mist. He claimed its pink underbelly was from
              swallowing the dawn, and its green stripes were from swimming
              through the reflections of the jungle canopy.
            </p>
            <p className="my-8">
              Furthermore, he swore that once a year, on the night of the
              fullest moon, the hippo would climb out of the river and roll
              itself into the nearest village, where it would allow the children
              to tap on its hide like a ripe melon. If the sound was a deep,
              satisfying thump, the village was promised a year of good fortune
              and plentiful rains. If it was a dull thud, they were in for a
              spell of bad luck and sour milk.
            </p>
            <p className="my-8">
              A young man from our expedition, a tenderfoot from Boston with
              more education than sense, asked what happened if you tried to eat
              one.
            </p>
            <p className="my-8">
              Stanley fixed him with a pitying look. "Sir," he said slowly, "it
              is a known fact that if you were to cook the meat of a Watermelon
              Hippo, it would not taste of pork or beef, but of disappointment.
              And the gravy it produces is said to be nothing more than
              boiled-down regret."
            </p>
            <p className="my-8">
              It is a fine story, and one that is almost good enough to be true.
              But I have lived long enough to know that the world is already
              packed to the brim with wonders, and there is no need to invent
              new ones. A hippopotamus that looks like a watermelon is marvel
              enough for me. It does not need to be a barometer for a village's
              luck or have a diet of pure poetry. It is simply a hippo, painted
              by a Creator with a particular fondness for picnics. And that, I
              find, is plenty."
            </p>
          </>
        }
      />
      <Footer />
    </>
  );
}
