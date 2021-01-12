import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})



export class CharactersPageComponent implements OnInit {

  characters;
  pageInfo ={};

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters(1);
  }
  
  getCharacters(page){
    this.charactersService.getCharacters(page).subscribe((res: any) => {
      this.characters = res.results;
      this.pageInfo = {...res.info, page}
  });
  }
}

