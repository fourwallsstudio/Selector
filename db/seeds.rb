
# Faker::TwinPeaks.character
# Faker::TwinPeaks.location
# Faker::TwinPeaks.quote


# { user: { username: 'calvin', password: '12345678'} }

user = User.create!({ username: "calvin", password: "12345678", email: "me@at.com" })

User.create!({ username: "dj rap", password: "12345678", email: "rap@rap.com" })

User.create!({ username: "source direct", password: "12345678", email: "sd@sd.com" })

User.create!({ username: "aphex twin", password: "12345678", email: "at@at.com" })

User.create!({ username: "UR", password: "12345678", email: "ur@ur.com" })

User.create!({ username: "tricky", password: "12345678", email: "trick@at.com" })

User.create!({ username: "bjork", password: "12345678", email: "ork@at.com" })

User.create!({ username: "goldie", password: "12345678", email: "gold@at.com" })

User.create!({ username: "young thug", password: "12345678", email: "yt@at.com" })


audio = File.open('app/assets/audio/Best Friend.mp3')
image = File.open('app/assets/images/default_bg.jpg')

Show.create!({ title: "yo", author: user, audio: audio, image: image })
