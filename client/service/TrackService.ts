import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TrackType } from '@/types/TrackType'

export const trackAPI = createApi({
	reducerPath: 'trackAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:5001'
	}),
	tagTypes: ['Tracks'],
	endpoints: (build) => ({
		fetchAllTrack: build.query<TrackType[], number>({
			query: (limit: number = 5) => ({
				url: '/tracks',
				params: {
					_limit: limit
				}
			}),
			providesTags: result => ['Tracks']
		}),
		createTrack: build.mutation<TrackType, TrackType>({
			query: (body) => ({
				url: '/tracks',
				method: 'POST',
				body: body
			}),
			invalidatesTags: ['Tracks']
		})

	})
})

export const {
	useFetchAllTrackQuery,
	useCreateTrackMutation
} = trackAPI

export const { fetchAllTrack, createTrack } = trackAPI.endpoints