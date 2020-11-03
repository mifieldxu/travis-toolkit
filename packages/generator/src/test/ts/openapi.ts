import { generateOpenapi } from '../../main/ts'
import swagger from '../ts/stub/swagger.json'

describe('', () => {
  it('', async () => {
    const res = generateOpenapi([
      {
        actions: [
          {
            findAction: [
              {
                httpMethod: 'GET',
                template: '/build/{build.id}',
                input: {
                  templateVariable: [
                    {
                      name: 'build.id',
                      type: 'Integer',
                    },
                  ],
                  queryParameter: [
                    {
                      name: 'include',
                      type: '[String]',
                    },
                  ],
                },
              },
            ],
          },
          {
            cancelAction: [
              {
                httpMethod: 'POST',
                template: '/build/{build.id}/cancel',
                input: {
                  templateVariable: [
                    {
                      name: 'build.id',
                      type: 'Integer',
                    },
                  ],
                },
              },
            ],
          },
          {
            restartAction: [
              {
                httpMethod: 'POST',
                template: '/build/{build.id}/restart',
                input: {
                  templateVariable: [
                    {
                      name: 'build.id',
                      type: 'Integer',
                    },
                  ],
                },
              },
            ],
          },
          {
            priorityAction: [
              {
                httpMethod: 'POST',
                template: '/build/{build.id}/priority',
                input: {
                  templateVariable: [
                    {
                      name: 'build.id',
                      type: 'Integer',
                    },
                  ],
                  acceptedParameter: [
                    {
                      name: 'build.cancel_all',
                      type: 'Unknown',
                    },
                  ],
                },
              },
            ],
          },
        ],
        title: 'build',
      },
    ])

    expect(res).toMatchObject(swagger)
  })
})
