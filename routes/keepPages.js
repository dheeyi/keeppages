const express = require('express');
const router = express.Router();
const data = require('./fakeData.json');

router.get(
  '/list',
  (req, res) => {

    res
      .status(200)
      .json(data.pages);

  }
);

router.post(
  '/search',
  (req, res) => {

    let { search } = req.body;
    let dataFiltered = [];

    if (
      search !== ''
    ) {

      search = search.charAt(0) === '#' ? search.substring(1) : search;

      data.pages.forEach((item) => {

        const {tags = []} = item;

        for (let tag in tags) {

          if (
            tags[tag].toLowerCase().indexOf(search.toLowerCase()) !== -1
          ) {
            dataFiltered.push(item);
            break;
          }

        }

      });
    }

    res
      .status(200)
      .json(dataFiltered.length ? dataFiltered : data.pages);
  }
);

router.post(
  '/delete',
  (req, res) => {

    const {id} = req.body;

    for (let itemPosition in data.pages) {

      if (
        data.pages[itemPosition].id === id
      ) {
        data.pages.splice(itemPosition, 1);
        break;
      }

    }

    res
      .status(200)
      .json(data.pages);

  }
);

router.post(
  '/sort',
  (req, res) => {

    const {checked} = req.body;

    if (
      checked === false
    ) {

      res
        .status(200)
        .json(data.pages);

    } else {

      const titles = data.pages.map((item) => {
        return item.title;
      }).sort();

      const dataFiltered = [];

      for (let position in titles) {

        const findItem = data.pages.find((item) => {
          return item.title === titles[position];
        });

        if (
          findItem
        ) {
          dataFiltered.push(findItem);
        }
      }

      res
        .status(200)
        .json(dataFiltered);

    }

  }
);

router.post(
  '/add',
  (req, res) => {

    const { title = 'default title', link = 'www.google.com', description = '', tags = '' } = req.body

    const ids = data.pages.map((item) => {
      return item.id
    })

    data.pages.push(
      {
        "id": Math.max(...ids) + 1,
        "title": title,
        "link": link,
        "description": description,
        "tags": [tags]
      }
    )

    res
      .status(200)
      .json(data.pages)

  }
)

module.exports = router;
