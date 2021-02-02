 <template>
     <div id="favorites" class="sidebar active">
         <header>
             <span>Favorites</span>
             <ul class="list-inline">
                 <li class="list-inline-item d-xl-none d-inline">
                     <a href="#" class="btn btn-outline-light text-danger sidebar-close">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-x">
                             <line x1="18" y1="6" x2="6" y2="18"></line>
                             <line x1="6" y1="6" x2="18" y2="18"></line>
                         </svg>
                     </a>
                 </li>
             </ul>
         </header>
         <form>
             <input type="text" class="form-control" placeholder="Search favorites">
         </form>
         <div class="sidebar-body">
             <ul class="list-group list-group-flush users-list">
                 <li class="list-group-item">
                     <div class="users-list-body">
                         <div>
                             <h5>Jennica Kindred</h5>
                             <p>I know how important this file is to you. You can trust me ;)</p>
                         </div>
                         <div class="users-list-action">
                             <div class="action-toggle">
                                 <div class="dropdown">
                                     <a data-toggle="dropdown" href="#">
                                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             class="feather feather-more-horizontal">
                                             <circle cx="12" cy="12" r="1"></circle>
                                             <circle cx="19" cy="12" r="1"></circle>
                                             <circle cx="5" cy="12" r="1"></circle>
                                         </svg>
                                     </a>
                                     <div class="dropdown-menu dropdown-menu-right">
                                         <a href="#" class="dropdown-item">Open</a>
                                         <a href="#" class="dropdown-item">Remove favorites</a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </li>
             </ul>
         </div>
     </div>
 </template>