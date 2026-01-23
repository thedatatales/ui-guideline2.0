import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  standalone : false
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Ensure theme-black is set as default theme
    const currentTheme = localStorage.getItem("theme");
    if (!currentTheme || currentTheme !== "theme-black") {
      localStorage.setItem("theme", "theme-black");
    }
    
    // Ensure theme-black class is applied to body
    const body = document.body;
    if (!body.classList.contains("theme-black")) {
      body.classList.add("theme-black");
    }
    
    // Remove other theme classes if present
    body.classList.remove("theme-indigo", "theme-greenwave");
  }
}
