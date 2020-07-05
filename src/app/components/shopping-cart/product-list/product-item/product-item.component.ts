import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { MatDialog, MatDialogConfig,} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  
  @Input() productItem: Product

  @Input() addedToWishlist: boolean
  
  constructor( public matDialog: MatDialog,
     private msg: MessengerService,
      private wishlistService: WishlistService,
      private cartservice: CartService ) { }

  ngOnInit(): void {
  }

    openModal() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.id = "modal-component";
      dialogConfig.height = "350px";
      dialogConfig.width = "600px";
      dialogConfig.data = {
        name: this.productItem.name,
        description: this.productItem.description,
        price: this.productItem.price,
        img: this.productItem.imgUrl
      }

      const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    }

    handleAddToCart() {
      this.cartservice.addToCart(this.productItem).subscribe(() => {
        this.msg.sendMsg(this.productItem);
      })
     
    }

    handleAddToWishlist() {
      this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
        this.addedToWishlist = true;
      })
    }
  
    handleRemoveFromWishlist() {
      this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
        this.addedToWishlist = false;
      })
    }

  }


