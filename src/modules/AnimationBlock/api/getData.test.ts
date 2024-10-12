import {getData} from './getData';
import axios from 'axios';
jest.mock('axios');

test('getData should return an array of objects with expected structure', async () => {

    const mockedData = [
        {
            id: "1",
            start: 1980,
            end: 1985,
            nameEvents: "Тех. события 1980-1985",
            events: [
                {
                    id: "1",
                    year: 1982,
                    text: "Выпущен Commodore 64 — самый продаваемый компьютер в истории.",
                },
            ],
        },
    ];

    (axios.get as jest.Mock).mockResolvedValue({ status: 200, data: mockedData });

    const data = await getData();

    expect(data).toEqual(expect.arrayContaining(
        [expect.objectContaining(
            {
                id: expect.any(String),
                start: expect.any(Number),
                end: expect.any(Number),
                nameEvents: expect.any(String),
                events: expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(String),
                        year: expect.any(Number),
                        text: expect.any(String),
                    })
                ])

            }
        )]
    ))
});
