# Database

## Profile

> Collection: `profile`

```javascript
// Profile Document
{
    overallSkills: ['Leadership', 'Management'],
    experiences: [
        {
            title: 'Senior Engineering Manager',
            company: 'Senestia',
            type: 'Full-time',
            start: new Date(),
            end: new Date(),
            skills: ['Leadership', 'Management'],
            detail: 'Develop something',
        },
        {
            title: 'Senior Engineering Manager',
            company: 'Senestia',
            type: 'Full-time',
            start: new Date(),
            end: new Date(),
            skills: ['Leadership', 'Management'],
            detail: 'Develop something',
        },
    ],
}

// Query Patterns
const profile = db.profile.findOne(); // ดึงข้อมูล Profile
```

## Portfolios

> Collection: `portfolios`

```javascript
// Portfolio Document
{
    cover: '',
    images: ['', ''],
    detail: 'Develop something',
    skills: ['Leadership', 'Management'],
    publishedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
}

// Query Patterns
const portfolios = db.portfolios.find({}).sort({ publishedAt: -1 }).limit(20).skip(0) // แสดงรายการในหน้าแรก

const portfolio = db.portfolios.findOne({ _id: ObjectId('507f191e810c19729de860ea') }) // แสดงรายเดียว
```

## Users

> Collection: `users`

```javascript
// User Document
{
    username: '',
    password: ''
}

// Query Pattern
const user = db.users.findOne({ username: 'foo', password: 'bar' })
```