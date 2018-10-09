const pennStructure = require('../data/penn/structure.xml')
const pennData = require('../data/penn/pages.json')
const pennTour = require('../tour/penn/tour.json')

const testData = require('../data/test/pages.json')
const testTour = require('../tour/test/tour.json')

const categoryColors = {
  translation: '#6c9fe6',
  flyleaf: 'darkslategrey',
  'commendatory verse': '#3366cc',
  engraving: '#dc3912',
  'original print': '#f78f34',
  'pattern poem': '#109618',
  'poetry (English)': '#466085',
  'poetry (Latin)': '#658bbf',
  preliminary: '#9c383b',
  'recycled image': '#ffbc63',
  'title page': '#faf0d2',
  'recycled poetry': '#ffea4d',
}


  // Get the current quire from the page structure for the current verso page
export const getCurrentQuire = (edition, pageIndex) => {
  const quires = metadata[edition].structure.quire
  let quire
  let page

  quires.forEach((q) => {
    const leaves = q.leaf
    leaves.forEach((l) => {
      const pages = l.page
      pages.forEach((p) => { // eslint-disable-line consistent-return
        if (p.$.index === pageIndex.toString()) {
          quire = q
          page = p
        }
      })
    })
  })
  return { quire, page }
}

// get all of the information about the individual pages in the book
export const getPageData = (pageData) => {
  const data = []
  pageData.forEach((p) => {
    const item = Object.assign({ color: '' }, p)
    item.color = categoryColors[item.category]
    data[parseInt(item.index, 10)] = item
  })
  return data
}

// Given an edition, find any possible tour data for a page
export const getTourForPage = (edition, page) => {
  const tour = metadata[edition].tour
  const data = tour.filter((item) =>
    item.page === page
  )[0]
  return data
}

export const metadata = {
  penn: {
    structure: pennStructure.book,
    pages: getPageData(pennData),
    tour: pennTour,
  },
  test: {
    structure: {
      quire: [],
    },
    pages: getPageData(testData),
    tour: testTour,
  },
}

