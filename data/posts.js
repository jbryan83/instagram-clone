import { USERS } from './users';

export const POSTS = [
  {
    imageUrl: 'https://picsum.photos/200/300',
    user: USERS[0].user,
    likes: 3366,
    caption:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'kmattea0',
        comment:
          'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
      },
      {
        user: 'apiatkowski1',
        comment:
          'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      },
      {
        user: 'preynold2',
        comment: 'Proin risus. Praesent lectus.',
      },
      {
        user: 'sfarrance3',
        comment:
          'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
      },
      {
        user: 'lbarrar4',
        comment:
          'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/200/250',
    user: USERS[1].user,
    likes: 1344,
    caption: 'Nulla tellus.',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'kmattea0',
        comment:
          'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
      },
      {
        user: 'apiatkowski1',
        comment:
          'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      },
      {
        user: 'preynold2',
        comment: 'Proin risus. Praesent lectus.',
      },
      {
        user: 'sfarrance3',
        comment:
          'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/200/350',
    user: USERS[2].user,
    likes: 4092,
    caption:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: 'kmattea0',
        comment:
          'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/200/240',
    user: USERS[3].user,
    likes: 2162,
    caption:
      'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    profile_picture: USERS[3].image,
    comments: [
      {
        user: 'kmattea0',
        comment:
          'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
      },
      {
        user: 'apiatkowski1',
        comment:
          'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      },
      {
        user: 'preynold2',
        comment: 'Proin risus. Praesent lectus.',
      },
      {
        user: 'sfarrance3',
        comment:
          'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
      },
      {
        user: 'lbarrar4',
        comment:
          'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      },
    ],
  },
  {
    imageUrl: 'https://picsum.photos/200/260',
    user: USERS[4].user,
    likes: 1361,
    caption:
      'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    profile_picture: USERS[4].image,
    comments: [],
  },
];
