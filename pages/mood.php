<?php
session_start();
if( ! isset($_SESSION['name']) ){
  header('Location: login.html');
  exit;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Mindmorphology</title>
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="shortcut icon" href="../favicon.png" />
</head>

<body class="page" data-next-page="outlets">
  <header>
    <h1 class="page__heading">
      How are you feeling today, 
    <?php
          echo $_SESSION['name'];
    ?>?</h1>
  </header>
  <main>
    <section class="page__subject">
      <form method="POST" id="formAnswear" onsubmit="greetUser(): return false" >
        <div class="answear-grid">
          <div class="answear-js">
          <label for="answear" class="answear answear--1" id="1">
            <svg class="mood" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152 152">
              <g id="Group_70" data-name="Group 70" transform="translate(-6966 -1381)">
                <g id="Ellipse_38" data-name="Ellipse 38" transform="translate(6966 1381)" fill="none" stroke="#000"
                  stroke-width="10">
                  <circle cx="76" cy="76" r="76" stroke="none" />
                  <circle cx="76" cy="76" r="71" fill="none" />
                </g>
                <g id="Group_15" data-name="Group 15" transform="translate(7009.368 1425.016)">
                  <g id="Ellipse_35" data-name="Ellipse 35" transform="translate(-0.368 -0.016)" stroke="#000"
                    stroke-width="10">
                    <ellipse cx="11" cy="10.5" rx="11" ry="10.5" stroke="none" />
                    <ellipse cx="11" cy="10.5" rx="6" ry="5.5" fill="none" />
                  </g>
                  <g id="Ellipse_36" data-name="Ellipse 36" transform="translate(43.632 -0.016)" stroke="#000"
                    stroke-width="10">
                    <circle cx="10.5" cy="10.5" r="10.5" stroke="none" />
                    <circle cx="10.5" cy="10.5" r="5.5" fill="none" />
                  </g>
                </g>
                <g id="Ellipse_39" data-name="Ellipse 39" transform="translate(6966 1381)" fill="#f9db02" stroke="#000"
                  stroke-width="10">
                  <circle cx="76" cy="76" r="76" stroke="none" />
                  <circle cx="76" cy="76" r="71" fill="none" />
                </g>
                <g id="Group_16" data-name="Group 16" transform="translate(7009.368 1425.016)">
                  <g id="Ellipse_35-2" data-name="Ellipse 35" transform="translate(-0.368 -0.016)" stroke="#000"
                    stroke-width="10">
                    <ellipse cx="11" cy="10.5" rx="11" ry="10.5" stroke="none" />
                    <ellipse cx="11" cy="10.5" rx="6" ry="5.5" fill="none" />
                  </g>
                  <g id="Ellipse_36-2" data-name="Ellipse 36" transform="translate(43.632 -0.016)" stroke="#000"
                    stroke-width="10">
                    <circle cx="10.5" cy="10.5" r="10.5" stroke="none" />
                    <circle cx="10.5" cy="10.5" r="5.5" fill="none" />
                  </g>
                </g>
                <path id="Path_41" data-name="Path 41" d="M0,0S14.388,11.467,29.369,11.467,59.923,0,59.923,0"
                  transform="translate(7012.325 1478.49)" fill="none" stroke="#000" stroke-linecap="round"
                  stroke-width="10" />
              </g>
            </svg>
            <input type="button" onclick="greetUser(); submitAnswear1(); return false" name="answear" value="Happy" />
          </label>
          </div>
          <div class="answear-js">
          <label for="answear" class="answear answear--2" id="2">
            <svg class="mood" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 85">
              <g id="Group_71" data-name="Group 71" transform="translate(0.338 -0.34)">
                <g id="Ellipse_38" data-name="Ellipse 38" transform="translate(-0.338 0.34)" fill="none" stroke="#000"
                  stroke-width="5">
                  <ellipse cx="43" cy="42.5" rx="43" ry="42.5" stroke="none" />
                  <ellipse cx="43" cy="42.5" rx="40.5" ry="40" fill="none" />
                </g>
                <g id="Group_15" data-name="Group 15" transform="translate(24.154 24.716)">
                  <g id="Ellipse_35" data-name="Ellipse 35" transform="translate(-0.493 -0.376)" stroke="#000"
                    stroke-width="5">
                    <ellipse cx="6.5" cy="6" rx="6.5" ry="6" stroke="none" />
                    <ellipse cx="6.5" cy="6" rx="4" ry="3.5" fill="none" />
                  </g>
                  <g id="Ellipse_36" data-name="Ellipse 36" transform="translate(24.507 -0.376)" stroke="#000"
                    stroke-width="5">
                    <circle cx="6" cy="6" r="6" stroke="none" />
                    <circle cx="6" cy="6" r="3.5" fill="none" />
                  </g>
                </g>
                <line id="Line_3" data-name="Line 3" x2="33.66" transform="translate(26.022 54.763)" fill="none"
                  stroke="#000" stroke-linecap="round" stroke-width="5" />
                <g id="Ellipse_39" data-name="Ellipse 39" transform="translate(-0.338 0.34)" fill="#f9db02" stroke="#000"
                  stroke-width="5">
                  <ellipse cx="43" cy="42.5" rx="43" ry="42.5" stroke="none" />
                  <ellipse cx="43" cy="42.5" rx="40.5" ry="40" fill="none" />
                </g>
                <g id="Group_16" data-name="Group 16" transform="translate(24.154 24.716)">
                  <g id="Ellipse_35-2" data-name="Ellipse 35" transform="translate(-0.493 -0.376)" stroke="#000"
                    stroke-width="5">
                    <ellipse cx="6.5" cy="6" rx="6.5" ry="6" stroke="none" />
                    <ellipse cx="6.5" cy="6" rx="4" ry="3.5" fill="none" />
                  </g>
                  <g id="Ellipse_36-2" data-name="Ellipse 36" transform="translate(24.507 -0.376)" stroke="#000"
                    stroke-width="5">
                    <circle cx="6" cy="6" r="6" stroke="none" />
                    <circle cx="6" cy="6" r="3.5" fill="none" />
                  </g>
                </g>
                <line id="Line_4" data-name="Line 4" x2="33.66" transform="translate(26.022 54.763)" fill="none"
                  stroke="#000" stroke-linecap="round" stroke-width="5" />
              </g>
            </svg>
            <input type="button" onclick="greetUser(); submitAnswear1(); return false" name="answear" value="Apathetic" />
          </label>
          </div>
          <div class="answear-js">
          <label for="answear" class="answear answear--3" id="3">
            <svg class="mood" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 86">
              <g id="Group_74" data-name="Group 74" transform="translate(-5865 -3158)">
                <g id="Group_73" data-name="Group 73" transform="translate(5864.66 3158.338)">
                  <g id="Ellipse_38" data-name="Ellipse 38" transform="translate(0.34 -0.338)" fill="none" stroke="#000"
                    stroke-width="5">
                    <ellipse cx="42.5" cy="43" rx="42.5" ry="43" stroke="none" />
                    <ellipse cx="42.5" cy="43" rx="40" ry="40.5" fill="none" />
                  </g>
                  <g id="Group_15" data-name="Group 15" transform="translate(24.154 24.716)">
                    <g id="Ellipse_35" data-name="Ellipse 35" transform="translate(0.186 -0.054)" stroke="#000"
                      stroke-width="5">
                      <circle cx="6" cy="6" r="6" stroke="none" />
                      <circle cx="6" cy="6" r="3.5" fill="none" />
                    </g>
                    <g id="Ellipse_36" data-name="Ellipse 36" transform="translate(25.186 -0.054)" stroke="#000"
                      stroke-width="5">
                      <ellipse cx="5.5" cy="6" rx="5.5" ry="6" stroke="none" />
                      <ellipse cx="5.5" cy="6" rx="3" ry="3.5" fill="none" />
                    </g>
                  </g>
                  <g id="Ellipse_39" data-name="Ellipse 39" transform="translate(0.34 -0.338)" fill="#f9db02"
                    stroke="#000" stroke-width="5">
                    <ellipse cx="42.5" cy="43" rx="42.5" ry="43" stroke="none" />
                    <ellipse cx="42.5" cy="43" rx="40" ry="40.5" fill="none" />
                  </g>
                  <g id="Group_16" data-name="Group 16" transform="translate(24.154 24.716)">
                    <g id="Ellipse_35-2" data-name="Ellipse 35" transform="translate(0.186 -0.054)" stroke="#000"
                      stroke-width="5">
                      <circle cx="6" cy="6" r="6" stroke="none" />
                      <circle cx="6" cy="6" r="3.5" fill="none" />
                    </g>
                    <g id="Ellipse_36-2" data-name="Ellipse 36" transform="translate(25.186 -0.054)" stroke="#000"
                      stroke-width="5">
                      <ellipse cx="5.5" cy="6" rx="5.5" ry="6" stroke="none" />
                      <ellipse cx="5.5" cy="6" rx="3" ry="3.5" fill="none" />
                    </g>
                  </g>
                </g>
                <path id="Path_186" data-name="Path 186" d="M0,6.441S8.082,0,16.5,0,33.66,6.441,33.66,6.441"
                  transform="translate(5890.682 3211.416)" fill="none" stroke="#000" stroke-linecap="round"
                  stroke-width="5" />
              </g>
            </svg>
            <input type="button" onclick="greetUser(); submitAnswear1(); return false" name="answear" value="Sad" />
          </label>
          </div>
          <div class="answear-js">
          <label for="answear" class="answear answear--4" id="4">
            <svg class="mood" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86 85">
              <g id="Group_71" data-name="Group 71" transform="translate(0.338 -0.34)">
                <g id="Ellipse_38" data-name="Ellipse 38" transform="translate(-0.338 0.34)" fill="none" stroke="#000"
                  stroke-width="5">
                  <ellipse cx="43" cy="42.5" rx="43" ry="42.5" stroke="none" />
                  <ellipse cx="43" cy="42.5" rx="40.5" ry="40" fill="none" />
                </g>
                <g id="Group_15" data-name="Group 15" transform="translate(24.154 24.716)">
                  <g id="Ellipse_35" data-name="Ellipse 35" transform="translate(-0.493 -0.376)" stroke="#000"
                    stroke-width="5">
                    <ellipse cx="6.5" cy="6" rx="6.5" ry="6" stroke="none" />
                    <ellipse cx="6.5" cy="6" rx="4" ry="3.5" fill="none" />
                  </g>
                  <g id="Ellipse_36" data-name="Ellipse 36" transform="translate(24.507 -0.376)" stroke="#000"
                    stroke-width="5">
                    <circle cx="6" cy="6" r="6" stroke="none" />
                    <circle cx="6" cy="6" r="3.5" fill="none" />
                  </g>
                </g>
                <line id="Line_3" data-name="Line 3" x2="33.66" transform="translate(26.022 54.763)" fill="none"
                  stroke="#000" stroke-linecap="round" stroke-width="5" />
                <g id="Ellipse_39" data-name="Ellipse 39" transform="translate(-0.338 0.34)" fill="#f9db02" stroke="#000"
                  stroke-width="5">
                  <ellipse cx="43" cy="42.5" rx="43" ry="42.5" stroke="none" />
                  <ellipse cx="43" cy="42.5" rx="40.5" ry="40" fill="none" />
                </g>
                <g id="Group_16" data-name="Group 16" transform="translate(24.154 24.716)">
                  <g id="Ellipse_35-2" data-name="Ellipse 35" transform="translate(-0.493 -0.376)" stroke="#000"
                    stroke-width="5">
                    <ellipse cx="6.5" cy="6" rx="6.5" ry="6" stroke="none" />
                    <ellipse cx="6.5" cy="6" rx="4" ry="3.5" fill="none" />
                  </g>
                  <g id="Ellipse_36-2" data-name="Ellipse 36" transform="translate(24.507 -0.376)" stroke="#000"
                    stroke-width="5">
                    <circle cx="6" cy="6" r="6" stroke="none" />
                    <circle cx="6" cy="6" r="3.5" fill="none" />
                  </g>
                </g>
              </g>
            </svg>
            <input type="button" onclick="greetUser(); submitAnswear1(); return false" name="answear" value="Numb" />
          </label>
          </div>
        </div>
      </form>
    </section>
  </main>
  <div hidden class="modal modal-js">
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" crossorigin="anonymous"></script>
  <script src="../js/main.js"></script>
</body>

</html>