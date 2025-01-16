export const initialComments = [
  {
    id: 1,
    nickname: "JohnDoe",
    comment:
      "Amazing movie! The visuals were stunning, and the plot was engaging.",
    rating: 5,
    timestamp: new Date(),
    likes: 5,
    replies: [
      {
        id: 1,
        nickname: "MovieBuff99",
        comment: "I totally agree, the visuals were breathtaking!",
        rating: 4,
        timestamp: new Date(),
        likes: 3,
        replies: [],
      },
      {
        id: 2,
        nickname: "CriticX",
        comment:
          "I also enjoyed the visuals, but the pacing could have been better.",
        rating: 3,
        timestamp: new Date(),
        likes: 2,
        replies: [],
      },
    ],
  },
  {
    id: 2,
    nickname: "JaneSmith",
    comment: "Great performances but the story felt a bit predictable.",
    rating: 3,
    timestamp: new Date(),
    likes: 2,
    replies: [
      {
        id: 3,
        nickname: "Cinephile_2020",
        comment: "Yeah, I felt the same way. The ending was very predictable.",
        rating: 2,
        timestamp: new Date(),
        likes: 1,
        replies: [],
      },
      {
        id: 4,
        nickname: "FilmLoverX",
        comment: "I think the performances made up for the predictable story.",
        rating: 4,
        timestamp: new Date(),
        likes: 5,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    nickname: "FilmFan123",
    comment: "Not what I expected. I was hoping for more action scenes.",
    rating: 2,
    timestamp: new Date(),
    likes: 1,
    replies: [
      {
        id: 5,
        nickname: "ActionLover88",
        comment: "I was disappointed too, the action scenes were minimal.",
        rating: 2,
        timestamp: new Date(),
        likes: 2,
        replies: [],
      },
      {
        id: 6,
        nickname: "MovieCritic45",
        comment:
          "Same here, the action was pretty underwhelming compared to the trailer.",
        rating: 1,
        timestamp: new Date(),
        likes: 1,
        replies: [],
      },
    ],
  },
];
