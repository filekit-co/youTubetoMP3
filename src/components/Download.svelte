<script lang="ts">
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Tabs,
    TabItem,
  } from "flowbite-svelte";
  export let dummyVideo;
  export let dummyAudio;
  export let dummyData;

  //   const dummyVideo = {
  //     "MP4 auto quility": "MB",
  //     "1080p(.mp4)": "212.3MB",
  //     "720p(.mp4)": "83.9MB",
  //     "480p(.mp4)": "55.4MB",
  //     "360p(.mp4)": "MB",
  //     "240p(.mp4)": "28.4MB",
  //     "144p(.mp4)": "22.3MB",
  //     "144p(.3gp)": "MB",
  //   };

  //   const dummyAudio = {
  //     "MP3 - 128kbps": "16.7MB",
  //   };
</script>

<div class="px-12 py-12 flex justify-between">
  <img
    src="https://pbs.twimg.com/media/EA9UJBjU4AAdkCm.jpg"
    alt="image"
    class="w-1/3 h-1/3"
  />

  <div class=" flex-col">
    <Tabs style="underline">
      <TabItem open>
        <div id="Video" slot="title" class="flex items-center gap-2">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm7 11-6-2V4l6-2v10Z"
            />
          </svg>
          Video
        </div>
        <Table striped={true}>
          <TableHead>
            <TableHeadCell>File type</TableHeadCell>
            <TableHeadCell>File size</TableHeadCell>

            <TableHeadCell>
              <span class="sr-only"> Edit </span>
            </TableHeadCell>
          </TableHead>

          <TableBody class="divide-y">
            {#each dummyVideo as video}
              <TableBodyRow>
                <TableBodyCell>{video.tag}</TableBodyCell>
                <TableBodyCell>{video.data}</TableBodyCell>

                <TableBodyCell>
                  <a
                    href="/tables"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Edit
                  </a>
                </TableBodyCell>
              </TableBodyRow>
            {/each}
          </TableBody>
        </Table>
      </TabItem>

      <TabItem>
        <div slot="title" class="flex items-center gap-2">
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 13v-3a9 9 0 1 0-18 0v3m2-3h3v7H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Zm11 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3v-7Z"
            />
          </svg>
          Audio
        </div>
        <Table hoverable={true}>
          <TableHead>
            <TableHeadCell>File type</TableHeadCell>
            <TableHeadCell>File size</TableHeadCell>

            <TableHeadCell>
              <span class="sr-only"> Edit </span>
            </TableHeadCell>
          </TableHead>

          <TableBody class="divide-y">
            {#each dummyAudio as audio}
              <TableBodyRow>
                <TableBodyCell>{audio.tag}</TableBodyCell>
                <TableBodyCell>{audio.data}</TableBodyCell>

                <TableBodyCell>
                  <a
                    href="/tables"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Edit
                  </a>
                </TableBodyCell>
              </TableBodyRow>
            {/each}
            <!-- <TableBodyRow>
              <TableBodyCell>Apple Watch 5</TableBodyCell>
              <TableBodyCell>Red</TableBodyCell>

              <TableBodyCell>
                <a
                  href="/tables"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Edit
                </a>
              </TableBodyCell>
            </TableBodyRow> -->
          </TableBody>
        </Table>
      </TabItem>
    </Tabs>
  </div>
</div>
