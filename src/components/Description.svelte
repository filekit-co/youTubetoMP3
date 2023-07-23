<script lang="ts">
  export let socialMedia: string;
  import { i } from "@inlang/sdk-js";
</script>

<div class="w-full px-2 py-8 sm:px-20 lg:px-32 text-center mx-auto">
  <hr class="h-px my-10 bg-gray-200 border-0 dark:bg-gray-700" />
  <div class="join">
    <h2 class="text-3xl font-black join-item">
      <span class="text-[#FF0000]">{socialMedia}</span> to&nbspMP3
    </h2>
  </div>
  <p class="text-base-content/60 font-title py-4 font-light md:text-lg">
    {i(`The best YouTube or TikTok video to MP3 Converter & Downloader`)}
  </p>
  <div class="mt-12 rounded-2xl bg-gray-100 leading-loose">
    <div class="p-8">
      <h2 class="text-2xl font-bold">{i("Convert Video to MP3")}</h2>
      <div class="text-justify mt-10 text-md">
        <p class="font-bold">{i("Fast & Free Download")}</p>
        <p>
          {i(
            "Looking for a reliable solution to convert YouTube or TikTok videos to MP3? Filekit.co offers an advanced online tool for seamless YouTube or TikTok to MP3 conversion, along with a range of other formats."
          )}
        </p>
        <p>
          {i(
            "With our user-friendly Web-App, you can easily download YouTube or TikTok content in AAC, M4A, PUS, Vorbis, FLAC, ALAC, and WAV formats, absolutely free."
          )}
        </p>
        <br />
        <p class="font-bold">
          {i(
            "Convert YouTube or TikTok to MP3 - Simple Steps for Free Download"
          )}
        </p>
        <ol class="list-inside list-decimal">
          <li>
            {i(
              "Discover the YouTube or TikTok video you want to convert and download."
            )}
          </li>
          <li>
            {i(
              "Start the video playback, then copy the video URL from your browsers address bar."
            )}
          </li>
          <li>
            {i(
              "Access our fast and efficient Web-App, and paste the video URL into our converter. Choose your preferred format, such as MP3 or MP4. If no format is specified, the default conversion will be to MP3."
            )}
          </li>
          <li>
            {i(
              "Initiate the conversion process with a single click. We strive to provide high-quality conversions, but please note that videos longer than 90 minutes may take a bit longer."
            )}
          </li>
          <li>
            {i(
              "Once the video is converted, simply click the Download button to get your file instantly."
            )}
          </li>
        </ol>
        <br />
        <p class="font-bold">
          {i("Unlock the Power of YouTube or TikTok - Free, Safe, and Secure.")}
        </p>
        <p>
          {i(
            "Filekit.cos Web-App ensures your safety and security while using our service. Feel confident knowing that our platform adheres to industry standards and that your personal information is protected. Experience the next level of YouTube or TikTok to MP3 conversion with Filekit.co - recommended by satisfied users worldwide."
          )}
        </p>
      </div>
    </div>
  </div>
</div>
