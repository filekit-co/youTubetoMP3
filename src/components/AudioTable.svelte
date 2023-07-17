<script lang="ts">
  import { global_selectedData } from "@store/data";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
  export let fileType: string;
</script>

<div class="sm:px-6 md:px-12 lg:px-12 py-2 mt-6">
  <div class="sm:col md:flex md:gap-6 lg:gap-10 mb-12">
    <a
      href={$global_selectedData.url}
      class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full rounded-t-lg h-full md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        src={$global_selectedData.thumbUrl}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {$global_selectedData.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {$global_selectedData.url}
        </p>
      </div>
    </a>
  </div>

  <Table class="sm:col-auto">
    <TableHead>
      <TableHeadCell>File title</TableHeadCell>

      <TableHeadCell>File Type</TableHeadCell>

      <TableHeadCell>
        <span class="sr-only"> Edit </span>
      </TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      <TableBodyRow>
        <TableBodyCell
          >{$global_selectedData.title.substring(0, 25)}</TableBodyCell
        >

        <TableBodyCell>{fileType}</TableBodyCell>

        <TableBodyCell>
          <!-- <a
            target="_blank"
            rel="noopener"
            href={"/"}
            download={$global_selectedData.title}
          >
            Download
          </a> -->
          <button>Download</button>
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>
