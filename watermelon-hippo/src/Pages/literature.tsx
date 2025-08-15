import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Featurecontent from "../Components/Featurecontent";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <>
      <title>In Literature | Watermelon Hippo</title>
      <meta
        name="description"
        content="Read excerpts from literature featuring the great animal - the watermelon hippo."
      />
      <Header />
      <Hero
        titleone="Hippos"
        titletwo="in writing"
        image="doug_wallow.webp"
        intro="As with all mysterious and revered phenomena, our subject inevitably features in works of literature past and present. Though some authors are a little generous with the truth, it's usually based on real life accounts and encounters. Probably."
      />
      <Featurecontent
        subtitle={"More Education than Sense"}
        title={"Fiction in the Modern Day"}
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
      <Featurecontent
        subtitle="No man shall harm this gentle, juicy lord!"
        title="Revered Throughout History"
        excerpt="Believed to be lost, the Bard himself penned a play featuring this mythical beast. Found in the early 2000s during an episode of Cash in the Attic, we're hoping to see the play on the stage in the near future."
        image={"twh_shakespeare.png"}
        content={
          <>
            <p className="font-display my-8">
              A moonlit riverside. Enter DUKE FERDINAND and LADY ROSAMUND. The
              sound of distant splashing is heard.
            </p>
            <p className="my-8">
              DUKE FERDINAND: Yon rippling flood betrays a mighty tread. What
              monstrous foot disturbs the midnight calm? A river shakes as
              though Titania weeps, And yet—behold! No fiend of shade it is, But
              one most strange: a beast both mild and vast, A hippopotamus of
              melon flesh!
            </p>
            <p className="my-8">
              LADY ROSAMUND: A melon beast? Thou mock'st mine ears, my lord.
            </p>
            <p className="my-8">
              DUKE FERDINAND: Nay, see it there! Its hide is verdant green, Its
              breast doth glimmer red as summer's blush. Its snout doth drip
              with nectar sweet and pure, And lo—its breath perfumes the very
              air!
            </p>
            <p className="font-display my-8">
              (The WATERMELON HIPPO enters, radiant in moonlight. It bellows
              softly, scattering seeds.)
            </p>
            <p className="my-8">
              LADY ROSAMUND: Saints shield us all! What dream hath walk'd from
              sleep? Some conjurer hath marr'd the laws of kind!
            </p>
            <p className="my-8">
              DUKE FERDINAND: Hush, lady, hush! Look how it bows to drink, And
              stoops with grace more soft than any lamb. No terror dwells within
              those seeded eyes, But gentle mirth, as though it knows us well.
            </p>
            <p className="font-display my-8">
              (He approaches the hippo, stroking its green hide.)
            </p>
            <p className="my-8">
              DUKE FERDINAND (aside): O Nature! Thou mad painter, sly and wild,
              Who mix'd the fields of fruit and beasts of Nile, And in thy sport
              hath birthed this wonderous king, Whose throne is mud, whose crown
              is sugared dew!
            </p>
            <p className="my-8">
              LADY ROSAMUND: Yet mark thee, love: though strange its form may
              be, Methinks it bears a soul most delicate. See how it hums! A low
              and honey'd tune, That stirs the heart as doth the lute in spring.
            </p>
            <p className="my-8">
              DUKE FERDINAND: By Heaven's grace, I swear before the stars: No
              man shall harm this gentle, juicy lord! For here I stand, its
              champion and friend, 'Gainst sword, 'gainst spear, 'gainst hunger
              most of all!
            </p>
          </>
        }
      ></Featurecontent>
      <Featurecontent
        subtitle="The seeds are life. Life is not to be stolen."
        title="The Celebrated God of the River"
        excerpt="One of his early works, the book considered the role of the animal as a deity in early civilisation. Said to be the inspiration for later work 'River God', which had nothing to do with hippos so its probably not true."
        image={"twh_wilbur_smith.png"}
        content={
          <>
            <p className="my-8">
              The blessing had barely been secured when the wind shifted,
              bringing with it the scent of smoke. It was faint at first,
              curling through the grass like a memory of fire, but N'khuba's
              head snapped up instantly. His eyes narrowed. The smoke was not
              from any hearth in their village—it came from the north, from
              beyond the lands their people had walked for generations.
            </p>

            <p className="my-8">
              Elder Zuweni saw it too, his face tightening. "They have come," he
              said grimly.
            </p>

            <p className="my-8">
              From the ridge above the river, dark figures appeared against the
              blazing sky. They were warriors—broad-shouldered, skin daubed in
              streaks of white ash, carrying spears that glinted like the fangs
              of a lion. Around their necks hung strings of seeds, black and
              polished, but smaller and duller than those gifted by the Sacred
              Rind.
            </p>

            <p className="my-8">
              N'khuba knew them: the <strong>Ngoru</strong>, the tribe who
              believed the watermelon hippo's blessing was meant only for
              themselves. In their lore, the creature had once been bound to
              their ancestors, and they claimed it had been stolen by his people
              in a season of famine long ago.
            </p>

            <p className="my-8">
              The Ngoru leader, Makholo, stepped forward. He was taller than any
              man in N'khuba's village, his chest a wall of muscle, his voice a
              deep, resonant growl. “You have taken the blessing that was ours,”
              he said, gesturing to the seeds cradled in Zuweni's hands. “Return
              them, or we take more than seeds.”
            </p>

            <p className="my-8">
              N'khuba stepped between the elders and the warriors. “The Sacred
              Rind chooses where its gift falls. This day, it chose us.”
            </p>

            <p className="my-8">
              A murmur rippled through the Ngoru warriors, low and dangerous.
              Makholo's eyes flashed. "Then it will choose again—after your
              blood runs in the grass."
            </p>

            <p className="my-8">
              The sun was dropping fast, throwing long shadows across the
              savannah. Both sides stood still, the air tight with the promise
              of violence. Then, from the river, a sound rolled out—a deep,
              echoing bellow. The water rippled, and a green bulk broke the
              surface.
            </p>

            <p className="my-8">
              The Watermelon Hippo rose between the two tribes, its black-seed
              eyes fixed on them. Water cascaded from its sides, and its mouth
              opened, revealing the crimson cavern of its maw. A slow rumble
              built in its chest, vibrating through the earth under their feet.
            </p>

            <p className="my-8">
              The Ngoru hesitated, some stepping back. Even Makholo faltered.
            </p>

            <p className="my-8">
              The beast stepped forward onto the bank, positioning itself
              squarely between the tribes. It released a single, long, low
              call—a sound that seemed to press into the hearts of all who heard
              it. In its wake, silence fell.
            </p>

            <p className="my-8">
              N'khuba felt the meaning as if it had been spoken aloud: "The
              seeds are life. Life is not to be stolen."
            </p>

            <p className="my-8">
              The Ngoru leader clenched his jaw. "This is not over," he said
              finally, and with a sharp gesture, his warriors melted back into
              the tall grass.
            </p>

            <p className="my-8">
              As the last of them vanished, the Sacred Rind turned, slipping
              once more into the river, the water closing over its green back.
            </p>

            <p className="my-8">
              Zuweni let out a breath he had been holding. "It has spared us a
              war," he said.
            </p>

            <p className="my-8">
              N'khuba shook his head. "No. It has given us time. Nothing more.""
            </p>
          </>
        }
      ></Featurecontent>
      <Footer />
    </>
  );
}
