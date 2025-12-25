// wishes-data.js
// All Christmas wishes for AYF Ijebu Diocese

const allWishes = [
    // Faith & Hope
    "This Christmas, may your faith shine brighter than the star that led the wise men!",
    "Jesus is the reason for the season! Let His light guide your path in 2025 🙏✨",
    "May the joy of Christ's birth fill your heart with peace that passes all understanding",
    "Keep your faith strong and your praise louder! Merry Christmas fam! 🎵",
    "This season, remember: God's greatest gift was wrapped in swaddling clothes 🎁",
    "May Emmanuel continue to be with you today and always!",
    "Let's celebrate the King who came to save us all! What a mighty God we serve! 💪",
    "Christmas reminds us that God keeps His promises. Trust Him with 2025!",
    "From the manger to our hearts, Jesus remains the ultimate gift 🎁❤️",
    "May the Christ-child bring divine direction to your journey ahead",

    // Joy & Celebration
    "It's giving Christmas energy! Let's celebrate BIG! 🎊",
    "Santa who? We're celebrating JESUS! Let the praises rise! 🙌",
    "Merry Christmas to the realest AYF member! Keep shining! ✨",
    "May your Christmas be filled with laughter, love, and plenty jollof rice! 😂🍛",
    "This Christmas, your joy go loud well well! 🔊",
    "Wishing you a Christmas filled with God's blessings and zero stress!",
    "May your holiday be merry, bright, and full of good vibes only! ☀️",
    "Christmas came and met you winning! Continue to win in Jesus' name! 🏆",
    "Let's turn up for Jesus this Christmas season! He's worthy! 🎶",
    "May your Christmas be as lit as the angels' announcement to the shepherds! 🔥",

    // Strength & Victory
    "This Christmas, receive fresh grace for greater exploits in 2025!",
    "You're ending the year strong and starting 2025 stronger! Believe it! 💯",
    "May God crown your efforts with supernatural success this season",
    "Every battle you faced in 2024, you WON! Celebrate your victory! 🎊",
    "Greater glory awaits you! This Christmas is just the beginning!",
    "You didn't come this far to only come this far! Keep pushing! 🚀",
    "May divine acceleration locate you this Christmas season!",
    "God is about to do something NEW in your life! Receive it! 🆕",
    "Your testimony will be loud in 2025! Merry Christmas warrior! ⚔️",
    "This Christmas, step into your season of dominion and authority!",

    // Love & Friendship
    "Grateful to have an amazing AYF member like you! Merry Christmas fam! 🤗",
    "Our fellowship is stronger because you're part of it! Happy holidays!",
    "May God bless you abundantly for being such a blessing to others 💝",
    "Sending you Christmas love from your AYF family! We appreciate you!",
    "This Christmas, know that you're loved, valued, and celebrated! 🎉",
    "Thank God for the gift of your friendship! Merry Christmas bestie!",
    "May your heart be full of love and your home full of laughter! 😊",
    "You make AYF more fun! Wishing you the merriest Christmas ever!",
    "Cheers to friendship, faith, and fantastic memories! Happy holidays! 🥳",
    "May God surround you with people who genuinely love and support you",

    // Prayer & Blessing
    "I pray this Christmas brings you closer to your divine purpose 🎯",
    "May angels encamp around you and yours this festive season!",
    "Praying for God's protection, provision, and promotion over your life!",
    "May every good thing you desire come to pass in Jesus' name! 🙏",
    "I speak peace, joy, and prosperity over your life this Christmas!",
    "May the Lord perfect everything concerning you before the year ends!",
    "Your prayers are answered! Your miracles are loading! 📲",
    "May God's favor follow you into 2025 and beyond!",
    "I decree: No weapon formed against you shall prosper! Amen! 🛡️",
    "May you experience God's presence in a real and powerful way!",

    // Wisdom & Growth
    "May God grant you wisdom beyond your years this Christmas season!",
    "This is your season of growth, advancement, and next-level thinking! 🧠",
    "May you finish strong and start 2025 with supernatural clarity!",
    "Keep learning, keep growing, keep glowing! Merry Christmas scholar! 📚",
    "May divine ideas and creative solutions locate you this season!",
    "Your potential is limitless! May you tap into it fully in 2025!",
    "Smart moves only in 2025! God will guide your steps! 👣",
    "May you walk in wisdom and make decisions that honor God!",
    "This Christmas, receive the spirit of excellence in all you do!",
    "Stay hungry for God's word and watch Him do the extraordinary!",

    // Fire & Power
    "You're not just a member, you're a FIRE BRAND for Christ! 🔥",
    "May the Holy Spirit empower you for greater assignments! ⚡",
    "This Christmas, receive fresh fire and fresh oil! 🕯️",
    "You're unstoppable when God is on your side! Keep blazing! 💥",
    "May your passion for God never fade! Stay lit fam! 🌟",
    "The same power that raised Jesus lives in YOU! Walk in it!",
    "Be bold, be fearless, be on fire for Jesus! Merry Christmas! 🔥",
    "May you operate in the fullness of the Holy Spirit's power!",
    "Complacency is not your portion! Stay hungry, stay fired up! 🚀",
    "This season, let your light shine so bright that darkness flees!",

    // Gratitude & Testimony
    "Grateful for how far God has brought us! Merry Christmas! 🙌",
    "Your testimony is powerful! Keep sharing what God has done!",
    "From January to December, God has been faithful! Praise Him! 🎶",
    "Look how far you've come! Celebrate your wins this Christmas! 🏆",
    "Thank God for life, health, and strength! You made it to Christmas! 💪",
    "Count your blessings, name them one by one! Merry Christmas! 🎵",
    "God did it before, He'll do it again! Your testimony continues! 📖",
    "May your end-of-year testimony blow people's minds! 🤯",
    "You survived 2024 because God kept you! Give Him glory!",
    "This Christmas, testify of God's goodness in the land of the living!",

    // Purpose & Destiny
    "This is your year to walk fully in your God-given purpose! 🎯",
    "May you discover and fulfill your destiny in Christ! 🗺️",
    "You were born for such a time as this! Merry Christmas champion!",
    "God has great plans for you! Trust the process! 🦋",
    "Your assignment is unique, your impact will be massive! Believe it!",
    "May you align with God's perfect will for your life in 2025!",
    "Destiny helper, locate this AYF member this Christmas season! 🙏",
    "You're not here by accident! You're here on assignment! 💼",
    "May clarity of purpose guide every step you take next year!",
    "This Christmas, step boldly into everything God has prepared for you!",

    // Special Christmas
    "From our AYF family to yours, have a blessed Christmas! 🎄",
    "May your Christmas be merry and your New Year prosperous! 🎆",
    "Celebrating Christ with you is always a vibe! Merry Christmas! 🥳",
    "This Christmas hits different when you're celebrating with purpose! ✨",
    "Emmanuel has come! Let's celebrate like never before! 🎉",
    "Best Christmas gift? Knowing Jesus as your Lord and Savior! 🎁",
    "May joy, peace, and blessings overflow in your life this season! 🌊",
    "Merry Christmas to someone who makes AYF proud! Keep repping! 💚",
    "This Christmas, receive everything you prayed for and more! 🙏",
    "From all of us at AYF Ijebu Diocese, have a wonderful Christmas! ❤️",
    "May your 2025 be greater than your 2024! Merry Christmas! 📈",
    "New levels, new dimensions, new glory! Merry Christmas fam! 🚀",
    "Jesus loves you, and so do we! Have an amazing Christmas! 💖",
    "No dull moment in your life in Jesus' name! Merry Christmas! 🎊",
    "This Christmas, your light shines brighter than ever before! ⭐"
];
