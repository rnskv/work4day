const VK = require('vk-io').VK;
const vk = new VK();
const request = require('request');

vk.token = '809559a9809559a9809559a93180ff209588095809559a9dc417f0517bae525d706efd3';

const config = {
    updateTime: 15 * 1000,
    api: {
        host: 'localhost',
        port: 800,
        protocol: 'http'
    }
};

async function updateLastPost(groupId, set) {
    request({
        method: 'PATCH',
        url: `${config.api.protocol}://${config.api.host}:${config.api.port}/groups/${groupId}`,
        headers: {
            "content-type": "application/json",  // <--Very important!!!
        },
        body: JSON.stringify({
            set: set
        })
    }, () => {
        console.log('All ok')
    });
}

async function getGroups() {
    return new Promise((res, rej) => {
        request({
            method: 'GET',
            url: `${config.api.protocol}://${config.api.host}:${config.api.port}/groups`,
            headers: {
                "content-type": "application/json",  // <--Very important!!!
            },
        }, (err, response, body) => {
            try {
                res(JSON.parse(body))
            } catch (err) {

            }
        });
    })
}

async function parseGroupWall(params) {
    const groupId = params.groupId;

    const response = await vk.api.wall.get({
        owner_id: groupId * -1,
        count: 2,
        extended: true,
        fields: ['photo_100', 'screen_name']
    });
    return {
        items: response.items,
        group: response.groups[0]
    };
}

function fetchAPI(body) {
    request({
        method: 'POST',
        url: `${config.api.protocol}://${config.api.host}:${config.api.port}/vacancies`,
        headers: {
            "content-type": "application/json",  // <--Very important!!!
        },
        body: JSON.stringify(body)
    }, () => {
        console.log('All ok')
    });
}

async function fetchNews() {
    const groups = await getGroups();
    groups.forEach(async group => {
        const response = await parseGroupWall({groupId: group.id});
        const posts = response.items;
        const newPosts = [];
        posts.forEach(async post => {
            if (post.id > group.lastPostId) {
                newPosts.push(post);

                fetchAPI({
                    groupId: group.id,
                    postId: post.id,
                    text: post.text,
                    date: post.date
                });

                console.log(post.date)

                group.lastParsedId = post.id;

                console.log('updateLastPost');

                await updateLastPost(group.id, {
                    lastPostId: post.id,
                    photo100: response.group.photo_100,
                    name: response.group.name,
                    screenName: response.group.screen_name
                });

                console.log(response.group.name);
            }
        });

        if (newPosts.length) {
            console.log('Обнаружены новые посты, в группе ' + group.id + ' последний id: ' + group.lastParsedId + '; Новых постов: ' + newPosts.length);
        } else {
            // console.log('Новых постов не найдено')
        }
    })
}

async function run() {
    await fetchNews();
    setInterval(async () => await fetchNews(), 60000);
}

run().catch(console.log);
