import {getData} from './getData';

test('getData should return an array of objects with expected structure', async () => {
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
