export default {
    data() {
        return {
          formSearch: {
            surname: '',
            name: '',
            patronymic: ''
          },
          searchVisible: false,
          createVisible: false,
          tableHistory: '',
          tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }],
          borrowersData: [
            {
              ID: 1,
              fullName: 'Петров Петр Петрович',
              days: 3,
              number: '1234 123456',
              region: 'Санкт-Петербург',
              body: 799.00,
              persent: 144.43,
              bodyPersent: 986.22
            },
            {
              ID: 2,
              fullName: 'Культяпко Зинаида Игнатьевна',
              days: 7,
              number: '3333 454545',
              region: 'Сыктывкар',
              body: 133.00,
              persent: 12.22,
              bodyPersent: 78.12
            },
            {
              ID: 3,
              fullName: 'Трунькин Марат Муратович',
              days: 4,
              number: '6666 761234',
              region: 'Благовещенск',
              body: 436.00,
              persent: 192.00,
              bodyPersent: 614.06
            },
          ],
          HistoryData: [
            {
              ID: 1,
              date: '23.09.2017',
              term: '11 дней',
              dateMaturity: '02.10.2017',
              persent: 3.03,
              sumPersent: 22.34,
              status: 'Погашен',
              operations: [
                {
                  date: '23.09.2017',
                  operation: 'Выдача займа',
                  amount: '700.00',
                },
                {
                  date: '27.09.2017',
                  operation: 'Досрочный возврат тела займа: 700.00 р, Оплата процентов: 25.20',
                  amount: '725.20',
                },
              ]
            },
            {
              ID: 1,
              date: '03.12.2017',
              term: '15 дней',
              dateMaturity: '18.12.2017',
              persent: 4.22,
              sumPersent: 743.86,
              status: 'Погашен',
              operations: [
                {
                  date: '03.12.2017',
                  operation: 'Выдача займа',
                  amount: '700.00',
                },
                {
                  date: '05.12.2017',
                  operation: 'Досрочный возврат тела займа: 700.00 р, Оплата процентов: 25.20',
                  amount: '725.20',
                },
              ]
            },
            {
              ID: 2,
              date: '01.01.2019',
              term: '27 дней',
              dateMaturity: '28.01.2019',
              persent: 3.03,
              sumPersent: 22.34,
              status: 'Погашен'
            },
          ]
        };
      },
      methods: {
        searchOpen: function() {
          this.searchVisible = true;
          this.createVisible = false;
        },
        createOpen: function() {
          this.createVisible = true;
          this.searchVisible = false;
        },
        closeWindow: function() {
          this.createVisible = false;
          this.searchVisible = false;
        },
        rowClick: function(event) {
          this.tableHistory = this.HistoryData.filter((item) => {
            if (item.ID == event.ID) {
              return item;
            }
          });
        }
      }
}