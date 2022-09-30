const fieldList = [
  { name: '序号', props: 'id'},
  { name: '书名', props: 'name'},
  { name: '日期', props: 'date'},
  { name: '价格', props: 'price'},
  { name: '数量', props: 'count'},
  { name: '操作', props: 'handler'},
]
const dataList = [
  {
    id: 1,
    name: '《海底两万里》',
    price: 99,
    count: 3,
    date: new Date().toLocaleString()
  },
  {
    id: 2,
    name: '《狂人日记》',
    price: 66,
    count: 1,
    date: new Date().toLocaleString()
  },
  {
    id: 3,
    name: '《石头记》',
    price: 210,
    count: 2,
    date: new Date().toLocaleString()
  },
  {
    id: 4,
    name: '《骆驼祥子》',
    price: 430,
    count: 1,
    date: new Date().toLocaleString()
  }
]